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
  if(!post) return notFound();
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
  if(!post) return notFound();
  if(post.inProgress){
    redirect("/in-progress");
  }
  const hasGithub = post.githubLink && post.githubLink.length > 0;

  return(
    <main className="container gap-8">
      <Header/>
      <article className="flex flex-col px-32 mx-auto gap-2 w-screen">
        <div id="Title Area" className="flex flex-col gap-2">
          <div id="Header Container" className="flex flex-row gap-4 py-4">
            <div className="bg-primary w-4"></div>
            <h1 className="text-8xl font-semibold">{post.title ?? post.slug}</h1>
          </div>
          <div id="Project Info" className="flex flex-col gap-2">
            <p><span className="font-semibold">Author:</span> {post.author}</p>
            <p><span className="font-semibold">Date:</span> {post.date}</p>
            <p><span className="font-semibold">Status:</span> {post.status}</p>
            {hasGithub && <p><a href={post.githubLink} className="font-semibold underline underline-offset-4 text-foreground hover:text-primary">Github Repository</a></p>}
          </div>
        </div>
        <div className="relative h-[260px] md:h-[480px] my-4">
          <Image
            src={post.imageSrc}
            alt={post.alt ?? post.title ?? "Project image"}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover rounded-2xl"
            priority
          />
        </div>
        <div className="mdx mx-100">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdxSource}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
