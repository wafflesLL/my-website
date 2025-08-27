"use server"
import {notFound} from "next/navigation";
import { getAllSlugs, getPostAndMDXSource} from "@/lib/posts";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/ui/Header";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({slug}));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const data = await getPostAndMDXSource(slug);
  if(!data) return {title: "Project not Found"};
  const { post } = data;
  return {
    title: post.title ?? post.slug,
    description: post.description,
  };
} 

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }){
  const { slug } = await props.params;
  const data = await getPostAndMDXSource(slug);
  if (!data) return notFound();

  const { post, mdxSource } = data;
  if(post.inProgress){
    redirect("/in-progress");
  }

  return(
    <main className="container gap-8">
      <Header/>
      <article className="flex flex-col px-32 mx-auto gap-8 w-screen">
        <h1 className="text-8xl text-normal">{post.title ?? post.slug}</h1>
        <div className="relative h-[260px] md:h-[480px]">
          <Image
            src={post.imageSrc}
            alt={post.alt ?? post.title ?? "Project image"}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover rounded-2xl"
            priority
          />
        </div>
        <div className="mdx">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdxSource}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
