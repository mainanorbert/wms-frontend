import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import Home from '../home/Home'
import ShowMembers from './ShowMembers'

const Members = () => {
  const [members, setMembers] = useState([])
  const [add, setAdd] = useState(false)

  const [firstname, setFirstname] = useState('')
  const [secondname, setSecondname] = useState('')
  const [reg_no, setReg_no] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [id_no, setId_no] = useState('')
  const [reg_amount, setReg_amount] = useState('')
  const [status, setStatus] = useState(false)
  const [err, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstname === '' || secondname === '' || reg_no === '' ||
      reg_no === '' || phone === '' || email === '' || id_no === '') {
      setError("All fields are required")
      console.log(err)

    }
    else {
      const payload = {
        firstname: firstname,
        secondname: secondname,
        phone_no: phone,
        member_no: reg_no,
        reg_amount: reg_amount,
        id_no: id_no,
        status: status,
        email: email,

      }
      axios.post('http://127.0.0.1:8000/api/cont/allcontributions/', payload)
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

  }


  return (
    <div className='bg-purple-600 p-4 h-screen relative'>
      <div className=" flex pl-9 ">
        <div className='text-neutral-200 font-bold w-10/12 text-2xl'>Currently Registered Members</div>
      </div>
      <div className='pl-8 text-xl text-neutral-400'>After Registering and Confirming your Details with Admin Your Details shall Appear Here:</div>

      <div className='p-4'>
        <button
          onClick={() => setAdd(!add)}
          className='flex bg-green-600 rounded-xl px-2' title='New Member'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
        </button>

      </div>

      <div className=' '>
        {add ?
          <form
            onSubmit={handleSubmit}
            className=' md:w-4/12 w-10/12  p-4 border absolute bg-purple-700 z-10'>
            <h1 className='text-center text-neutral-100 font-bold text-xl'>Adding a new Member</h1>
            <div className=''>
              <label className='font-bold text-neutral-300'>First Name</label> <br />
              <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                name='firstname'
                onChange={(e) => setFirstname(e.target.value)}
                type="text" />
            </div>

            <div className=''>
              <label className='font-bold text-neutral-300'>Second Name</label> <br />
              <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none' name='secondname'
                type="text"

                onChange={(e) => setSecondname(e.target.value)}
              />
            </div>

            <div className=''>
              <label className='font-bold text-neutral-300'>Reg. No</label> <br />
              <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                name='reg'
                type="text"
                onChange={(e) => setReg_no(e.target.value)}
              />
            </div>
            <div className=''>
              <label className='font-bold text-neutral-300'>Id. No</label> <br />
              <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                name='id_no'
                type="text"
                onChange={(e) => setId_no(e.target.value)}
              />
            </div>

            <div className=''>
              <label className='font-bold text-neutral-300'>Phone No.</label> <br />
              <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                name='phone'
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className=''>
              <label className='font-bold text-neutral-300'>Email</label> <br />
              <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                name='email'
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className=''>
              <label className='font-bold text-neutral-300'>Registration Amount</label> <br />
              <input className='w-10/12 rounded h-8 p-1 text-neutral-300 border bg-transparent outline-none'
                name='reg_amount'
                type="number"
                onChange={(e) => setReg_amount(e.target.value)}
              />
            </div>

            <div className=''>
              <label className='font-bold text-neutral-300'>Status</label> <br />
              <input
                type='checkbox'
                name='status'
                onChange={(e) => setStatus(true)}
                className='rounded p-1 h-6  text-neutral-300 border bg-transparent outline-none' />
            </div>
            <div className='flex justify-between mt-2 '>
              <button className='bg-green-400 w-6/12 text-neutral-200 font-bold h-8 rounded-xl'>Submit</button>
            </div>
          </form> : ''}
      </div>
      <div className='flex justify-center absolute  right-10px w-full z-0'>
        <ShowMembers />
      </div>

    </div>
  )
}

export default Members
