import { z } from "zod";
import { fileSchema } from "./common.schema";

// gunakan validate request middleware
export const articleCreateSchema = z.object({
  body: z.object({
    title: z.string().min(4, "Title must consist of at least 4 character"),
    description: z.string().min(1, "Description is required"),
    content: z.string().min(1, "Content is required"),
  }),
  file: fileSchema,
});

// gunakan validate body middleware
export const articleBodyCreateSchema = z.object({
  title: z.string().min(4, "Title must consist of at least 4 character"),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(1, "Content is required"),
});
