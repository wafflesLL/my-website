"use server"
import { Button } from "@/components/ui/button";
import { ChevronDown} from 'lucide-react';
import Post from '@/components/ui/Post';
import Header from "@/components/ui/Header";
import { getPosts } from "@/lib/posts.ts";

export default async function Page(): Promise<TSX.Element> {
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
              href={`blog/${p.slug}`}
              alt={p.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
