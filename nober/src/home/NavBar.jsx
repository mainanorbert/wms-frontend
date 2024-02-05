import React, { useState } from 'react'
import '../App.css'
import wms from '../images/wms5.jpg'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const[hide, setHide]= useState(true)
    return (
        <div className='relative mt-0 w-full'>

            <div className='md:flex justify-between shadow-xl  pb-1 '>
            <div className=' md:w-2/12 pl-4 flex justify-between'>
            <img className='rounded-full ' width='70px' src={wms} alt="" />
            <button
            className='p-4 md:hidden'
            onClick={(e)=>setHide(!hide)}><svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </button>
            </div>
              {hide && (  <nav className='w-3/12 md:flex block md:space-x-0 space-x-1 justify-around pt-4'>
              <Link className='block' to='/register' >Register</Link>
              <Link className='block' to='/login'>Login</Link>
          </nav>)}
            </div>


        </div>
    )
}

export default NavBar