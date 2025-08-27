import path from "node:path";
import { readFile } from "node:fs/promises";
import { PostsSchema, type PostRecord } from "@/schemas/post"

const POST_FILE = path.join(process.cwd(), "public", "posts.json");

export async function getPosts(): Promise<PostRecord[]> {
  const raw = await readFile(POST_FILE, "utf8");
  const parsed = PostsSchema.safeParse(JSON.parse(raw));
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `* ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
      throw new Error("posts.json validation failed \n" + issues);
  }
  return parsed.data;
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getPosts();
  return posts.map(p => p.slug);
}

export async function getPostAndMDXSource(slug: string): Promise<{ post: PostRecord | null; mdxSource: string }> {
  const posts = await getPosts();
  const post = posts.find(p => p.slug === slug) ?? null;

  const mdxPath = path.join(process.cwd(), "public", post.mdxSource);
  const mdxSource = await readFile(mdxPath, "utf8");
  return { post, mdxSource };
}
