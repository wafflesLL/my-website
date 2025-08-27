import Image from 'next/image'
import Link from 'next/link'

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
        <Link href={href} className="text-primary underline-offset-4 hover:underline">{title}</Link>
        <div className="text-4xl text-foreground">{description}</div>
      </div>
    </div>
  )
}
export default Post
