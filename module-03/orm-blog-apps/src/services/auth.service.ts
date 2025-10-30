import { Prisma } from "@prisma/client";
import { hashSync, genSaltSync, compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

import prisma from "../lib/prisma";
import { createCustomError } from "../utils/customError";
import { SECRET_KEY } from "../configs/env.config";

async function getUserByEmail(email: string) {
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

    const token = sign(payload, SECRET_KEY, { expiresIn: "1h" });

    return {
      user: payload,
      token,
    };
  } catch (err) {
    throw err;
  }
}

export async function register(params: Prisma.UserCreateInput) {
  try {
    const isExist = await getUserByEmail(params.email);

    if (isExist) throw createCustomError(401, "Email already exist");

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(params.password, salt);

    const user = await prisma.user.create({
      select: {
        email: true,
      },
      data: {
        email: params.email,
        password: hashedPassword,
      },
    });

    return user;
  } catch (err) {
    throw err;
  }
}
