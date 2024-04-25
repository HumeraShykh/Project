import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="border border-200 rounded-lg shadow flexStart max-container padding container relative z-30 py-5">
      <img src="/Capture.jpg" alt="" width={50} height={29}/>  
      <ul className=" lg:flex gap-6  hidden">
        <li>
          <Link href="/pricing">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/whyus">
            Why Us
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/FAQ">
            FAQ
          </Link>
        </li>
    </ul>
    <div className="ml-auto flex gap-4">
        <button className="nderline bg-white text-black px-4 py-2 btn-round">Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 btn-round">Register</button>
             
    </div>
    </nav>
  )
}

export default Navbar
