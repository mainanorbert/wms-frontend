import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import '../App.css';


const ShowMembers = () => {
  const [members, setMembers] = useState([]);
  let i = 0

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/members/');
        setMembers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className='h-screen over-flow-y'>
    
      <table className='table-auto bg-purple-600 md:w-full'>
        <thead>
          <tr key='' className='text-neutral-300 md:text-sm text-xs'>
            <th className='border-r md:px-1'>No.</th>
            <th className='border-r md:px-4'>Member No</th>
            <th className='border-r md:px-4'>First Name</th>
            <th className='border-r md:px-2'>Second Name</th>
            <th className='border-r md:px-2'>Phone</th>
            <th className='border-r md:px-2'>Email</th>
            <th className='border-r md:px-2'>Id No.</th>
            <th className='border-r md:px-2'>Reg. Amount</th>
            <th className='border-r md:px-2'>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            members.map((member) => (
              <tr className='border md:text-sm text-xs' key={member.id}>
                <td className='border-r text-neutral-200'>{i+=1}.</td>
                <td className='border-r'>{member.member_no}</td>
                <td className='border-r'>{member.firstname}</td>
                <td className='border-r'>{member.secondname}</td>
                <td className='border-r'>{member.phone_no}</td>
                <td className='border-r'>{member.email}</td>
                <td className='border-r'>{member.id_no}</td>
                <td className='border-r'>{member.reg_amount}</td>
                <td className='border-r'>{member.status === false ? 'Inactive' : 'Active'}</td>
                <td className='border-r px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              </td>
                <td className='border-r px-1'><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              </td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>
  );
};

export default ShowMembers;
