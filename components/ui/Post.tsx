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
  const imageRounded =
    variant === "imageRight"
      ? "rounded-tl-[80px] rounded-bl-[80px]"
      : "rounded-tr-[80px] rounded-br-[80px]";

  return (
    <div className={`flex w-screen gap-16 ${variant === "imageRight" ? "flex-row-reverse" : "flex-row"}`}>
      <div className="flex-1 relative h-[400px]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className={`object-cover ${imageRounded}`}
        />
      </div>
      <div className="flex-1 flex flex-col text-center py-4 gap-4">
        <h2 className="text-primary">{title}</h2>
        <div className="text-2xl text-foreground">{description}</div>
        <Button variant="default" asChild className="self-center font-semibold">
          <Link href={href}>View Article</Link>
        </Button>
      </div>
    </div>
  )
}
export default Post
