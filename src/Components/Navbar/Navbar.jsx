import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from '../Home/Home'



export default function Navbar() {

  // console.log(window.innerWidth);
  const [screen, setScreen] = useState(false)

  function toggleNavbar(){
    setScreen(!screen)
  }

  return (
    <>
    <nav className='bg-[#2C3E50] text-white py-[24px] fixed top-0 left-0 right-0 z-50'>
        <div className="container w-[80%]  mx-auto md:flex justify-between align-middle">
            <div className='flex justify-between'>
            <h1 className=' md:text-3xl text-2xl font-bold '><Link to=''>START FRAMEWORK</Link></h1>
            <div className='md:hidden'onClick={()=>{toggleNavbar()}}>
            <i className="fa-solid fa-bars fa-2x"></i>
            </div>
            </div>
            <ul className={`${screen?'hidden ':''}   md:flex  md:space-x-2`}>
                <li className='p-2 font-bold'><NavLink to='about'>ABOUT</NavLink></li>
                <li className='p-2 font-bold'><NavLink to='portfolio'>PORTFOLIO</NavLink></li>
                <li className='p-2 font-bold'><NavLink to='contact'>CONTACT</NavLink></li>
            </ul>
        </div>
    </nav>

    

    </>
  )
}
