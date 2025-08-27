import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <main className="font-semibold flex flex-col items-center justify-center min-h-screen text-5xl font-montserrat gap-4">
      <h1>
        Hi, my name is <span className="text-[#00D9FF]">Liam</span>
      </h1>
        <Button variant="default" asChild className="font-semibold text-5xl py-8 rounded-[20px]">
          <Link href="/blog">
              view my work
          </Link>
        </Button>
    </main> 
  );
}
