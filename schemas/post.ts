import { z } from "zod";

export const PostVariant = z.enum(["imageLeft", "imageRight"]);

export const PostSchema = z.object({
  slug: z.string().min(1),
  variant: PostVariant.default("imageLeft"),
  imageSrc: z
    .string()
    .min(1)
    .refine(
      (s) => s.startsWith("/images/") && s.endsWith(".webp"),
      { message: "contentPath must be images/*.webp" }
    ),
  title: z.string().optional(),
  description: z.string().optional(),
  alt: z.string().optional(),
  mdxSource: z
    .string()
    .min(1)
    .refine(
      (s) => s.startsWith("/content/posts/") && s.endsWith(".mdx"),
      { message: "contentPath must be content/posts/*.mdx" }
    ),
  inProgress: z.boolean()
});

export const PostsSchema = z.array(PostSchema);
export type PostRecord = z.infer<typeof PostSchema>;
