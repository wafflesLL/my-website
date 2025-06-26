import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {

  return (
    <div className="font-semibold flex flex-col items-center justify-center min-h-screen text-7xl font-montserrat gap-4">
      <div className="text-white">
        Hi, my name is <span className="text-[#00D9FF]">Liam</span>
      </div>
      <Link href="/blog">
        <Button padding={8} className="text-7xl">
          view my work
        </Button>
      </Link>
    </div> 
  );
}
