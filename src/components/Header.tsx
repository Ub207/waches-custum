import React from 'react'
import Link from 'next/link'
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
   <header className='header'>
    <h1 className='logo'>Watch World</h1>
    <nav>
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/Contact">Contact</Link>
  <Link href="/Watches">Watches</Link>
  <FaCartPlus style={{color:"#fff",fontSize:"20px"}} />
  
  

    </nav>
   </header>
  );
}

export default Header