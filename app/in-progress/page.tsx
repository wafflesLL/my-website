import  Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InProgress() {
  return (
    <div className="font-semibold flex flex-col items-center justify-center min-h-screen text-5xl font-montserrat gap-4">
      <div className="text-white">
        This page is a work in progress,  
      </div>
      <Button asChild variant="link" className="text-3xl font-semibold text-primary">
        <Link href="/blog">Back to Projects?</Link>
      </Button>
    </div> 
  );
}
