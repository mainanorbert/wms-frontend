import React from 'react'
import '../index.css'
import member from '../images/membership.jpg'
import donate from '../images/donate.png'
import mem from '../images/member.jpg'
import { Link } from 'react-router-dom/dist'
import { motion } from 'framer-motion'

const Pages = () => {
  const rotVariants ={
    hover: {
      rotate: 360,
    },
    initial: {
      rotate: 0
    }
  }
  return (
    <div className='flex w-full justify-center pl-[4rem] mt-4'>
      <div className='md:grid md:grid-cols-3 gap-2 w-full '>

        <Link to='/members' className='wel bg-purple-700 md:w-8/12 md:h-[12rem]'>
          <h3 className='text-center text-neutral-200 p-1 space-x-1 flex justify-around text-2xl pb-3 border-bottom border-b font-bold'>
            <img className='w-8/12' src={member} alt="" />

            <Link className='pt-8 animate-bounce'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            </Link>
          </h3>

          <ul className='flex p-1 justify-start border hover:text-neutral-300 space-x-10 text-lg font-bold items-align bg-purple-900 text-neutral-400'>
            <p className='par'>Over</p>
            <p className='rounded-full border  border-color-white py-3 p-1 border-2 text-center'>2000</p>
            <p className='  par text-center'>Registered</p>
          </ul>

          <div className='flex justify-start hover:text-neutral-200 space-x-1 text- font-bold items-align bg-purple-700 text-neutral-400'>

            <p className=' py-3 p-1 text-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </p>
            <p className='par'>Ksh. 200</p>
            <p className=' par text-center'> = Membership</p>
          </div>


        </Link>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=' bg-purple-600 w-8/12 h-[18rem] '>

          <h3 className='text-center  bg flex justify-center p-1 text-neutral-400 font-bold '>
            <img width="" src={donate} alt="" /></h3>
          <div>
            <div className='list-disc px-4 list-disc text-neutral-200 '>
              <li>Donation by Grants</li>
              <li>Give Cash to Support a Life</li>
              <li>Give Cash in Hard Times</li>
              <Link to='/contributions' className='font-bold flex justify-center space-x-2 bg-green-600 h-8 rounded text-center'>Ongoing Donations
              <svg className='animate-ping' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>


              </Link>
            </div>
          </div>

        </motion.div>
        <motion.div
        variants={rotVariants}
          initial="initial"
          whileHover="hover"
          className='w-8/12 w-4/12 h-[17rem] w-4/12 bg-purple-700'>
          <h3 className='flex p-1 justify-center text-neutral-200 font-bold text-xl'>
            <img src={mem} alt="" />
          </h3>

          <div className='list-disc p-2 text-neutral-200 text-lg '>
            <li>Accountability</li>
            <li>No handling of Cash</li>
            <li>Access to financial Records</li>
            <li>Efficient Management</li>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pages