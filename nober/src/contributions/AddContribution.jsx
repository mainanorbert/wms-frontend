import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const AddContribution = () => {
    const { ContId } = useParams();
    const [amount, setAmount] = useState(0)
    const [memberNo, setMemberNo] = useState(null)

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
            axios.post('http://127.0.0.1:8000/api/cont/allcontributions/', payload)
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
            <div className='md:flex grid grid-cols-1 ml-2 justify-center md:w-8/12 md:space-x-4'>
                <form
                    className='border text-neutral-300 md:w-4/12 w-8/12 mt-4 p-2 mt-10'
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
                </form>
                <Link to={`contributionlist/${ContId}`} className=' mt-10 flex'>
                    <div className=' p-4'>
                        <div className='p-3 rounded text-neutral-300 bg-green-500  text-lg'>View the Contributions: <br />
                            <p>made for Contribution ID: <i className='text-neutral-200 font-bold text-xl'>{ContId}</i></p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AddContribution
