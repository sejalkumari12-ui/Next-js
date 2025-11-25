import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex text-4xl mb-10 bg-orange-400 justify-between items-center px-6 py-3'>
      <h3>Sejal</h3>
      <div className='flex gap-4'>
       <Link href='/'>Home</Link>
       <Link href='/about'>About</Link>
       <Link href='/contact'>Contact</Link>
       <Link href='/products' >product</Link>
      </div>
    </div>
  )
}

export default Navbar
