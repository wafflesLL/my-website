"use server"
import { Button } from "@/components/ui/Button";
import { ChevronDown} from 'lucide-react';
import Post from '@/components/ui/Post';
import Header from "@/components/ui/Header"; // Adjust the path as needed

const Page = () => {
  return (
    <div className="scroll-smooth hide-scrollbar no-scrollbar overflow-auto relative font-semibold flex flex-col items-center justify-center min-h-screen text-7xl font-montserrat gap-4">
      <div>Projects</div>
      <Button padding={1}>
        <a href="#projects-section">
          <ChevronDown size={100} strokeWidth={2.5} />
        </a>
      </Button>
      <div  className="absolute top-[100vh]">
        <Header/> 
        <div id="#projects-section" className="flex flex-col gap-30">
          <Post variant="imageLeft" imageSrc="/images/gfgImage.png" title="Glasses For Good" description="description"/>
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
