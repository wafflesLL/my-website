import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="z-50 sticky top-0 flex flex-row text-3xl w-screen px-8 bg-[#393939]/70 shadow-[inset_0_16px_32px_rgba(0,0,0,0.7),inset_0_-16px_32px_rgba(0,0,0,0.7)] items-center py-4 font-semibold">
      <div>Liam Loeffel</div>
      <div className="flex flex-row gap-16 ml-auto">
        <Link href="/">Home </Link>
        <Link href="/blog">Projects</Link>
        <Link href="/about">About</Link>
        <div>Contact</div>
      </div>
    </div>
  )
}
export default Header