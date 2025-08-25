import path from "node:path";
import { readFile } from "node:fs/promises";
import { PostsSchema, type PostRecord } from "@/schemas/post"

const POST_FILE = path.join(process.cwd(), "public", "posts.json");

export async function getPosts(): Promise<PostRecord[]> {
  const raw = await readFile(POST_FILE, "utf8");
  const json = JSON.parse(raw);
  const parsed = PostsSchema.safeParse(json);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `* ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
      throw new Error("posts.json validation failed \n" + issues);
  }
  return parsed.data;
}

export async function getPostBySlug(slug: string): Promise<string> {
  const posts = await getPosts();
  return posts.find(p => p.slug === slug) ?? null;
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getPosts();
  return posts.map(p => p.slug);
}
