import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <main className="font-semibold flex flex-col items-center justify-center min-h-screen text-7xl font-montserrat gap-4">
      <h1>
        Hi, my name is <span className="text-[#00D9FF]">Liam</span>
      </h1>
      <Link href="/blog">
        <Button>
          view my work
        </Button>
      </Link>
    </main> 
  );
}
