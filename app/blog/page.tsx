"use server"
import path from "node:path";
import { readFile } from "node:fs/promises";
import { Button } from "@/components/ui/Button";
import { ChevronDown} from 'lucide-react';
import Post from '@/components/ui/Post';
import Header from "@/components/ui/Header";
import { PostsSchema, type PostRecord } from "@/schemas/post";

async function getPosts(): Promise<PostRecord[]> {
  const filePath = path.join(process.cwd(), "public", "posts.json");
  const raw = await readFile(filePath, "utf8");
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

export default async function Page(): Promise<JSX.Element> {
  const posts = await getPosts();
  return (
    <div className="scroll-smooth hide-scrollbar no-scrollbar overflow-auto relative font-semibold flex flex-col items-center justify-center min-h-screen text-7xl font-montserrat gap-4">
      <div>Projects</div>
      <Button as="a" href="#projects-section" padding={1}>
        <ChevronDown size={100} strokeWidth={2.5} />
      </Button>
      <div id="projects-section" className="absolute top-[100vh]">
        <Header/> 
        <div  className="flex flex-col gap-30">
          {posts.map((p) => (
            <Post
              key={p.slug ?? p.imageSrc}
              variant={p.variant}
              imageSrc={p.imageSrc}
              title={p.title}
              description={p.description}
              alt={p.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
