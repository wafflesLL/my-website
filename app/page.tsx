"use server"
import { Button } from "@/components/ui/button";
import Post from '@/components/ui/Post';
import Header from "@/components/ui/Header";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();
  return (
    <div className="scroll-smooth hide-scrollbar no-scrollbar overflow-auto relative font-semibold flex flex-col items-center justify-center min-h-screen text-5xl font-montserrat gap-4">
      <h1>
        Hi, my name is <span className="text-[#00D9FF]">Liam</span>
      </h1>
      <Button variant="default" asChild className="font-semibold text-3xl py-6 rounded-[20px]">
        <Link href="#projects-section" prefetch={false}>
            view my work
        </Link>
      </Button>
      <div id="projects-section" className="absolute top-[100vh]">
        <Header/> 
        <div  className="flex flex-col gap-8 my-8 mx-40">
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
