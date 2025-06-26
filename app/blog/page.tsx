"use client"
import React, { useEffect, useRef, useState} from 'react'
import { Button } from "@/components/ui/Button";
import { ChevronDown} from 'lucide-react';
import Link from 'next/link';
import Post from '@/components/ui/Post';

const page = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToTopOfSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const triggerRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hide-scrollbar no-scrollbar overflow-auto relative font-semibold flex flex-col items-center justify-center min-h-screen text-7xl font-montserrat gap-4">
      <div>Projects</div>
      <Button padding={1} onClick={scrollToTopOfSection}>
        <ChevronDown size={100} strokeWidth={2.5} />
      </Button>
      <div ref={sectionRef} className="absolute top-[100vh]">
        <div className="z-50 sticky top-0 flex flex-row text-3xl w-screen px-8 bg-[#393939]/70 shadow-[inset_0_16px_32px_rgba(0,0,0,0.7),inset_0_-16px_32px_rgba(0,0,0,0.7)] items-center py-4">
          <div>Liam Loeffel</div>
          <div className="flex flex-row gap-16 ml-auto">
            <Link href="/">Home </Link>
            <Link href="/blog">Projects</Link>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Post variant="imageLeft"/>
          <Post variant="imageRight"/>
          <Post variant="imageLeft"/>
          <Post variant="imageRight"/>
          <Post variant="imageLeft"/>
        </div>
      </div>
    </div>
  )
}

export default page