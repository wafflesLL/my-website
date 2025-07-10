"use client"
import React, { useEffect, useRef, useState} from 'react'
import { Button } from "@/components/ui/Button";
import { ChevronDown} from 'lucide-react';
import Post from '@/components/ui/Post';
import Header from "@/components/ui/Header"; // Adjust the path as needed

const Page = () => {
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
        <Header/> 
        <div className="flex flex-col gap-30">
          <Post variant="imageLeft"/>
          <Post variant="imageRight"/>
          <Post variant="imageLeft"/>
          <Post variant="imageRight"/>
          <Post variant="imageLeft"/>
        </div>
        <div ></div>
      </div>
    </div>
  )
}

export default Page