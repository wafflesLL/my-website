import  Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";

export default function InProgress() {
  return (
    <>
      <Header />
      <div className="font-semibold flex flex-col items-center justify-center min-h-screen text-5xl font-montserrat gap-4">
        <div className="text-white">
          This page is a work in progress,  
        </div>
        <Button asChild variant="link" className="text-3xl font-semibold text-primary">
          <Link href="/">Back to Projects?</Link>
        </Button>
      </div> 
    </>
  );
}
