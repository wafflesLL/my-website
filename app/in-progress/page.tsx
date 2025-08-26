import  Link from "next/link";
export default function InProgress() {
  return (
    <div className="font-semibold flex flex-col items-center justify-center min-h-screen text-7xl font-montserrat gap-4">
      <div className="text-white">
        This post is a work in progress,  
      </div>
      <Link href="/blog">look at other posts</Link>
    </div> 
  );
}
