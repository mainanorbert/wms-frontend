import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axiosClient from '../AxiosClient'

const ContributionList = () => {
  const { ContId } = useParams()
  const [contlist, setContList] = useState([])
  const [des, setDes] = useState('')
  const [conttype, setContType] = useState('')
  const[totalAmount, setTotalAmount] =useState(0)
  let i = 0


  useEffect(() => {
    const contList = async () => {
      try {

        const res = await axiosClient.get(`http://127.0.0.1:8000/api/cont/allcontributions/${ContId}/contribution_list`)
        setContList(res.data)
        setDes(res.data[0].cont_des)
        setContType(res.data[0].cont_type)
         setTotalAmount(res.data[res.data.length-1].total_amount)
        setTotalAmount(total);
        
      }
      catch (e) {

      }
    }
    contList()
  }, [ContId])
  console.log('ttt', totalAmount)

  return (

    <div className='h-screen bg-purple-600'>
      <div className='flex md:w-10/12 justify-center'>
        <div className='md:w-8/12 mt-2 md:m-1 ml-2'>
          <div>
            <h2 className='text-neutral-300 font-light'> <i className='text-neutral-200 font-bold'>Type: </i> {conttype} </h2>
            <h3 className='text-neutral-300  font-light'> <i className='text-neutral-200 font-bold'>Contribution Id:</i>  {ContId}</h3>
            <p className='text-yellow-400 font-light '> <i className='text-neutral-200 font-bold'>Purpose:</i> {des}</p>
          </div>
          <table className='border w-10/12 table-auto mt-6'>
            <thead>
              <tr className="md:font-bold text-neutral-200">
                <td className='px-2 border-r'>No.</td>
                <td className='px-2 border-r'>First Name</td>
                <td className='px-2 border-r'>Second Name</td>
                <td className='px-2 border-r'>Member No</td>
                <td className='px-2 border-r'>Amount</td>
              </tr>
            </thead>

            <tbody>
              {
                contlist.map((cont) => (
                  <tr className='border-r px-2 border' key={cont.id}>
                    <td className='border-r px-2'>{i++}</td>
                    <td className='border-r px-2'>{cont.firstname}</td>
                    <td className='border-r px-2'>{cont.secondname}</td>
                    <td className='border-r px-2'>{cont.member_id}</td>
                    <td className='border-r px-2'>{cont.amount}</td>
                  </tr>
                ))
              }
              <tr className='' key=""><td></td> <td></td><td className='font-bold text-lg text-neutral-300'>Total Amount: </td> <td></td> <td className='p-1 underline font-bold text-neutral-200'>{totalAmount}</td></tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default ContributionList