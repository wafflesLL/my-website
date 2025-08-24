import { z } from "zod";

export const PostVariant = z.enum(["imageLeft", "imageRight"]);

export const PostSchema = z.object({
  slug: z.string().optional(),
  variant: PostVariant.default("imageLeft"),
  imageSrc: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  alt: z.string().optional(),
});

export const PostsSchema = z.array(PostSchema);
export type PostRecord = z.infer<typeof PostSchema>;
