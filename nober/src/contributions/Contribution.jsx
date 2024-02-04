import React, { useState } from 'react'
import axios from 'axios'
import ActiveContributions from './ActiveContributions'

const Contribution = () => {
  const [show, setShow] = useState(false)
  const[ContributionType,setContributionType] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    if (ContributionType ==='' || description===''){
      console.log('All must be filled')

    }
    else{
      const payload = {
        cont_type: ContributionType,
        description: description
      }
      console.log(payload)
      axios.post('http://127.0.0.1:8000/api/cont/contributions/', payload)
      .then((data)=>{
        console.log("Success")
      })
      .catch((error)=>{
        console.log("error")
      })
    }
  }

  return (
    <div className='bg-purple-600'>

      <div className='flex justify- w-4/12 p-4 relative cursor-pointer' onClick={()=>setShow(!show)} >
        <div className="bg-green-500 hover:bg-green-400 flex items-center con h-[4rem] text-white  flex rounded-xl">
          <p className='font-bold p-2 '>Launch Contribution</p>
          <p className=''><svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>
          </p>
        </div>
      </div>
      <div className='w-8/12 flex justify-centr px-4 pb-1'>
        {show && (<form className='md:w-3/12 border absolute z-10 bg-purple-600' onSubmit={handleSubmit}>
        <h1 className='text-center text-neutral-200 font-bold text-lg'>Describe The Contribution Here</h1>

        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>Contribution Type</label> <br />
          <select
            className='w-9/12 outline-none p-1 rounded'
            id="dropdown"
            type='text'
            name='ContributionType'
            onChange={((e)=>setContributionType(e.target.value))}
             >
            <option value="">Select...</option>
            <option value="Death">Death</option>
            <option value="Sickness">Sickness</option>
            <option value="School Fees">School Fees</option>
          </select>
        </div>

        <div className='p-2'>
          <label className='text-neutral-300 font-bold'>Description</label> <br />
          <textarea
            className='w-11/12 outline-none p-1 rounded'
            cols="40" rows="6"
            type ='text'
            name='description'
            onChange={((e)=>setDescription(e.target.value))}
            >
          </textarea>
        </div>
        <div className=' flex justify-between font-bold text-neutral-300 p-2'>
          <button className='bg-green-600 p-1 rounded-full w-8/12'>Submit</button>
        </div>
      </form>)}
      </div>
      <div> <ActiveContributions/></div>

    </div>
  )
}


export default Contribution
