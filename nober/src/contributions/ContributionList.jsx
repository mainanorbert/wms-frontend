import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ContributionList = () => {
  const { ContId } = useParams()
  const [contlist, setContList] = useState([])
  const [des, setDes] = useState('')
  const [conttype, setContType] = useState('')
  let i = 0


  useEffect(() => {
    const contList = async () => {
      try {

        const res = await axios.get(`http://127.0.0.1:8000/api/cont/allcontributions/${ContId}/contribution_list`)
        setContList(res.data)
        setDes(res.data[0].cont_des)
        setContType(res.data[0].cont_type)
        console.log(res.data)
      }
      catch (e) {

      }
    }
    contList()
  }, [ContId])
  console.log(des)

  return (

    <div className='h-screen bg-purple-600'>
      <div className='flex w-10/12 justify-center'>
        <div className='w-8/12 mt-2'>
          <div>
            <h2 className='text-neutral-300 font-light'> <i className='text-neutral-200 font-bold'>Type: </i> {conttype} </h2>
            <h3 className='text-neutral-300  font-light'> <i className='text-neutral-200 font-bold'>Contribution Id:</i>  {ContId}</h3>
            <p className='text-yellow-400 font-light '> <i className='text-neutral-200 font-bold'>Purpose:</i> {des}</p>
          </div>
          <table className='border w-10/12 table-auto mt-6'>
            <thead>
              <tr className="font-bold text-neutral-200">
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
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default ContributionList