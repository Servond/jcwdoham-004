import { Prisma } from "@prisma/client";
import { hashSync, genSaltSync, compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";

import { transporter } from "../helpers/nodemailer";
import prisma from "../lib/prisma";
import { createCustomError } from "../utils/customError";
import { SECRET_KEY } from "../configs/env.config";

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (err) {
    throw err;
  }
}

export async function refreshToken(email: string) {
  try {
    const user = await getUserByEmail(email);

    if (!user) throw createCustomError(401, "Invalid email");

    const payload = {
      email: user.email,
      name: user.name,
      role: user.role,
    };

    const accessToken = sign(payload, SECRET_KEY, { expiresIn: "10m" });
    const refreshToken = sign(payload, SECRET_KEY, { expiresIn: "30d" });

    return {
      accessToken,
      refreshToken,
    };
  } catch (err) {
    throw err;
  }
}

export async function login(email: string, password: string) {
  try {
    const user = await getUserByEmail(email);

    if (!user) throw createCustomError(401, "Invalid email or password");

    const isValidPassword = compareSync(password, user.password);

    if (!isValidPassword)
      throw createCustomError(401, "Invalid email or password");

    const payload = {
      email: user.email,
      name: user.name,
      role: user.role,
    };

    const accessToken = sign(payload, SECRET_KEY, { expiresIn: "10m" });
    const refreshToken = sign(payload, SECRET_KEY, { expiresIn: "30d" });

    return {
      accessToken,
      refreshToken,
    };
  } catch (err) {
    throw err;
  }
}

export async function register(params: Prisma.UserCreateInput) {
  const targetPath = path.join(__dirname, "../templates", "registration.hbs");

  try {
    const isExist = await getUserByEmail(params.email);

    if (isExist) throw createCustomError(401, "Email already exist");

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(params.password, salt);

    const t = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        select: {
          email: true,
        },
        data: {
          email: params.email,
          password: hashedPassword,
        },
      });

      const templateSrc = fs.readFileSync(targetPath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSrc);
      const html = compiledTemplate({ email: user.email });

      await transporter.sendMail({
        to: user.email,
        subject: "Thank your for joining us",
        html,
      });

      return user;
    });

    return t;
  } catch (err) {
    throw err;
  }
}
