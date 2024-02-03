import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ActiveContributions = () => {
  const [contributions, setContributions] = useState([])



  useEffect(()=>{
    const getContributions= async()=>{
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/cont/contributions/');
        setContributions(res.data)
        console.log('response:', res.data)
        
      }
      catch(err){
        console.log(err)
      }
    }
    getContributions()
  }, [])
  return (
    <div>
      <div className='text-center font-bod text-2xl text-neutral-200'>
        These are the Active Contributions Running in our Welfare
      </div>
      <div className=' flex justify-center gap-3 p-4'>
        <div className='grid grid-cols-4 gap-8 w-10/12 '>
      {contributions.map((contribution) =>(
        <Link to={`/addcontribution/${contribution.contribution_number}`} key={contribution.id} className='border bg-purple-800 rounded p-1'>
        <h2 className=' font-bold text-neutral-300 mt-1'> Type: <i className='text-yellow-200 font-light'>{contribution.cont_type}</i>
        </h2>
        <h3 className='font-bold text-neutral-300 mt-1'>Contribution ID:
        <i className='rounded-full font-light text-yellow-300 py-1 p-1 border text-white'> {contribution.contribution_number}</i>
        </h3>
        <p className='font-bold text-neutral-300 mt-1'> Description:
        <i className='text-yellow-200 font-light'>{contribution.description}</i>
        </p>

      </Link>
      ))}
        </div>
      </div>

    </div>
  )
}

export default ActiveContributions
