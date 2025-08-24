import React from 'react'
import Image from 'next/image'

interface PostProps {
  variant?: "imageLeft" | "imageRight";
  imageSrc?: string;
  title?: string;
  description?: string;
  alt?: string;
}

const Post: React.FC<PostProps> = ({ 
  variant = "imageLeft",
  imageSrc = "/images/yo.jpg",
  title = "Project",
  description = "Description",
  alt = "Post",
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
        <div className="text-[#00D9FF]">{title}</div>
        <div className="text-4xl text-[#FFFFFF]">{description}</div>
      </div>
    </div>
  )
}
export default Post
