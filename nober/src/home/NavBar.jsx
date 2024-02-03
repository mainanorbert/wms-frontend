import React from 'react'
import '../App.css'
import wms from '../images/wms5.jpg'

const NavBar = () => {
    return (
        <div className='fixe mt-0 w-full'>

            <div className='flex justify-between shadow-xl  pb-1 '>
            <div className=' w-2/12 pl-4'><img className='rounded-full ' width='70px' src={wms} alt="" /></div>
                <nav className='w-3/12 flex justify-around pt-4'>
                    <a>Register</a>
                    <a>Login</a>
                </nav>
            </div>


        </div>
    )
}

export default NavBar