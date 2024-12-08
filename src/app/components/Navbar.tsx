'use client';
import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { PiBag } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black border-b border-orange-500" style={{ width: '1320px', height: '87px' }}>
      <div className="h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center">
          <span className="text-2xl font-bold">
            <span className="text-yellow-500">Food</span>
            <span className="text-white">tuck</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-start space-x-8">
          <Link href="/menu" className="text-gray-300 hover:text-yellow-500">
            Menu
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-yellow-500">
            Blog
          </Link>
          <Link href="/pages" className="text-gray-300 hover:text-yellow-500">
            Pages
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-yellow-500">
            About
          </Link>
          <Link href="/shop" className="text-gray-300 hover:text-yellow-500">
            Shop
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-yellow-500">
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
  
              </button>
            </div>
            <PiBag className='text-white '/>
          </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-yellow-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/menu" className="block px-3 py-2 text-gray-300 hover:text-yellow-400">
              Menu
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-300 hover:text-white">
              Blog
            </Link>
            <Link href="/pages" className="block px-3 py-2 text-gray-300 hover:text-white">
              Pages
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/shop" className="block px-3 py-2 text-gray-300 hover:text-white">
              Shop
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar