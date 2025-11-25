import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
      <h3 className="text-3xl font-bold text-white tracking-wide">Sejal</h3>
      <div className='flex gap-4'>
       <Link href='/' className="hover:text-gray-200 transition">Home</Link>
       <Link href='/about' className="hover:text-gray-200 transition">About</Link>
       <Link href='/contact' className="hover:text-gray-200 transition">Contact</Link>
       <Link href='/products' className="hover:text-gray-200 transition" >product</Link>
       <Link href='/course' className="hover:text-gray-200 transition">course</Link>
      </div>
    </div>
  )
}

export default Navbar
