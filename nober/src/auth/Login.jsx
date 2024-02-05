import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [iserror, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '' || passwordConf === '') {
      setErrorMessage('All fields are required')
      setIsError(true);
    }
    else {
      const payload = {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConf
      }
      axiosClient.post('/register', payload)
        .then((response) => {
          console.log(response.data.token)
          navigate('/login');

        })
        .catch((error) => {
          setErrorMessage(error.response.data.message)
          setIsError(true);
           console.log(error);
        })

    }

  }
  useEffect(() => {
    if (iserror) {
      const timer = setTimeout(() => {
        setIsError(false)
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [iserror])

  const handleShowPassword = () => {
    setShowPass(!showPass);
  }
  return (
    <div className="w-full grid place-items-center pb-6 h-screen bg-purple-600" >
      <form className='md:w-3/12 w-8/12 relative border p-2 grid' onSubmit={handleSubmit} >
        {iserror && (<motion.div
          initial={{ sclae: 0, y: 0 }}
          animate={{ sclae: 1, y: 2 }}
          duration={{ duration: 4 }}
          className='bg-red-600 absolute w-full text-center p-1 text-white rounded'>
          {errorMessage}

        </motion.div>)}
        <p className='text-center text-xl text-neutral-300 font-bold'>Login</p>
        
        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>Email</label><br />
          <input
            type="text"
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            className=' w-full p-1 h-8 border rounded border bg-transparent outline-none text-neutral-200 font-ligh' />
        </div>
        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>Password</label><br />
          <input
            type={showPass ? 'text' : 'password'}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            className=' w-full p-1  h-8 border rounded border bg-transparent outline-none text-neutral-200 font-ligh' />
        </div>
        
        <div className='text-white p-2'>
          <input type="checkbox"
            checked={showPass}
            onChange={handleShowPassword}
          />
          <span>Show password</span>
        </div>

        <div className='w-full pl- justify-between'>
          <button className='bg-green-400 w-10/12 rounded font-bold text-neutral-300 hover:bg-green-500 h-8 '>Login</button>
         <div> <Link className="text-xs hover:font-bold text-neutral-300 underline" to="/register">Not Registered?</Link></div>
        </div>

      </form>
    </div>
  )
}

export default Register