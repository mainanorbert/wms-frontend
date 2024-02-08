import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import axiosClient from '../AxiosClient';
import { useAuth } from '../ContextProvider';

const AddContribution = () => {
    const { ContId } = useParams();
    const [amount, setAmount] = useState(0)
    const [memberNo, setMemberNo] = useState(null)
    const {user, token} = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (amount === 0 || memberNo === '') {
            console.log('all fields need to be filled')
        }
        else {
            const payload = {
                cont_id: ContId,
                amount: amount,
                member_no: memberNo
            }
            axiosClient.post('http://127.0.0.1:8000/api/cont/allcontributions/', payload)
                .then((data) => {
                    console.log("success")

                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }

    return (
        <div className='bg-purple-600 h-screen'>
            <div className='md:flex flex ml-2 justify-center md:w-10/12 md:space-x-4'>
            <div className='mt-2' title='Back to Contribution'>
            <Link to='/contributions'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg></Link>
          </div>
                {token && user === 'nober'? <form
                className='border text-neutral-300  md:w-4/12 w-8/12 mt-4 p-2 mt-10'
                onSubmit={handleSubmit}
            >

                <div className=''>
                    <h2 className='font-bold text-lg text-neutral-200'>Admin Update on Contrubutions</h2>

                </div>
                <div className='w-full mt-4'>
                    <label className='font-bold text-neutral-200'>Contribution ID</label> <br />
                    <input className='w-full p-1 outline-none border bg-transparent'
                        type="number"
                        value={ContId}
                        disabled
                    />
                </div>
                <div className='w-full'>
                    <label className='font-bold text-neutral-200'>Amount</label> <br />
                    <input className=' p-1 w-full outline-none border bg-transparent'
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className='w-full'>
                    <label className='font-bold text-neutral-200'>Member No</label> <br />
                    <input className='  p-1 w-full outline-none border bg-transparent'
                        type="text"
                        onChange={(e) => setMemberNo(e.target.value)}
                    />
                </div>
                <div className='mt-2 flex h-8 '>
                    <button className='w-7/12 rounded bg-green-500 text-neutral-200 font-bold'>Submit</button>
                </div>
            </form>: <div className='text-neutral-200'> If You have Made welfare contribution for  contribution ID <span className='underline'>{ContId}</span>, please contact Admin to
            to be updated in the list. Update will take some time and your name will be seen in the list below within 24 hours after payment.
            Your Name will be updated in the list below. Click the Green button to view the updated list
             </div>}
                <div className=''>
                <Link to={`contributionlist/${ContId}`} className=' mt-10 flex'>
                    <div className=' p-4'>
                        <div className='p-3 rounded text-neutral-300 bg-green-500  text-lg'>View the Contributions: <br />
                            <p>made for Contribution ID: <i className='text-neutral-200 font-bold text-xl'>{ContId}</i></p>
                        </div>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default AddContribution
