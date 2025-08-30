import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="z-50 sticky top-0 flex flex-row text-3xl w-screen px-8 bg-[#393939]/70 shadow-[inset_0_16px_32px_rgba(0,0,0,0.7),inset_0_-16px_32px_rgba(0,0,0,0.7)] items-center py-4 font-semibold">
      <div>Liam Loeffel</div>
      <div className="flex flex-row gap-16 ml-auto">
        <Button asChild variant="link" className="text-3xl font-semibold">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="link" className="text-3xl font-semibold">
          <Link href="/in-progress">About</Link>
        </Button>
        <Button asChild variant="link" className="text-3xl font-semibold">
          <Link href="/in-progress">Contact</Link>
        </Button>
      </div>
    </div>
  )
}
export default Header
