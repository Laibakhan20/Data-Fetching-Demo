import Link from 'next/link'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div>
  <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-gray-800">Data Fetching <span className='text-blue-600'>Demo.</span></div>
          <ul className="hidden md:flex space-x-6 font-semibold ">
          <Link href="/" className="mx-2 hover:underline hover:text-gray-500">
          Home
        </Link>
        <Link href="/products" className="mx-2 hover:underline hover:text-gray-500">
          Client-Side
        </Link>
        <Link href="/server-fetch" className="mx-2 hover:underline hover:text-gray-500">
          Server-Side
        </Link>
        </ul>
          <div className="md:hidden text-gray-600 hover:text-blue-600 ">
          <DropdownMenu>
  <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel></DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href={"/"}>Home</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href={"products"}>Client-Side</Link></DropdownMenuItem>
    <DropdownMenuItem><Link href={"/server-fetch"}>Server-Side</Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          </div>
        </div>
      </nav>
  </div>
  </div>
  )
}

export default Navbar