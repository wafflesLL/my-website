import { z } from "zod";

export const IconSchema = z.object({
  skills: z.array([
    z.object({
      name: z.string().min(1),
      alt: z.string().optional(),
      image: z
        .string()
        .min(1)
        .refine(
          (s) => s.startsWith("/images/") && s.endsWith(".webp"),
          { message: "contentPath must be /images/*.webp" }
        ),
      description: z.string().min(1),
    }),
  ]),
  developertools: z.array([
    z.object({
      name: z.string().min(1),
      alt: z.string().optional(),
      image: z
        .string()
        .min(1)
        .refine(
          (s) => s.startsWith("/images/") && s.endsWith(".webp"),
          { message: "contentPath must be /images/*.webp" }
        ),
      description: z.string().min(1),
    }),
  ]),
});

export type IconRecord = z.infer<typeof IconSchema>; 
