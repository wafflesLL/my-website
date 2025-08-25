"use server"
import {notFound} from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams(): Promise<string[]> {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({slug}));
}


export default async function ProjectPage({ params }: { params: { slug: string } }): Promise<TSX.Element> {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();
  return{
  }
}
