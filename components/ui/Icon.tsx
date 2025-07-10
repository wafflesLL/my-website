"use client"
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface IconProps {
  src: string | StaticImageData
  alt?: string
  description?: string
}

const Icon: React.FC<IconProps> = ({
  src,
  alt = "icon",
  description = "I am a description"
}) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleClick = () => {
    if(showDesc == true){
     setShowDesc(false); 
    }else{
     setShowDesc(true); 
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="border-[3px] border-[#00D9FF] rounded-[33px] p-2 hover:shadow-[0_0_20px_#00D9FF] group cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative aspect-square w-20">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-[25px]"
          />
        </div>
      </div>
      {showDesc && (
    <div className="mt-2 px-4 py-2 shadow-[0_0_20px_#00D9FF] text-white text-center text-sm rounded-[16px] max-w-[300px]">
          {description}
        </div>
      )}
    </div>
  )
}

export default Icon