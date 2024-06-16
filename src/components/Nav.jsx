import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='px-10 py-5 flex justify-between items-center'>
        <div className="left text-2xl">Something</div>
        <div className="right text-base flex gap-4">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Nav