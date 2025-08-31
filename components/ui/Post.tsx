import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button';

interface PostProps {
  variant?: "imageLeft" | "imageRight";
  imageSrc?: string;
  title?: string;
  description?: string;
  alt?: string;
  href?: string;
}

const Post: React.FC<PostProps> = ({ 
  variant = "imageLeft",
  imageSrc = "/images/yo.jpg",
  title = "Project",
  description = "Description",
  alt = "Post",
  href = "/",
}) => {
  // Choose which corners to round based on variant
  return (
    <div id="post-border" className=" overflow-hidden relative border border-[3px] border-foreground/50 rounded-[20px] ">
      <div className={`flex ${variant === "imageRight" ? "flex-row-reverse" : "flex-row"}`}>
        <div className="flex-1 relative h-[300px]">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col text-center py-4 gap-4">
          <h2 id="post-title" className="text-primary text-4xl">{title}</h2>
          <div className="text-2xl text-foreground mx-4">{description}</div>
          <Button variant="default" asChild className="self-center font-semibold">
            <Link href={href}>View Article</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Post
