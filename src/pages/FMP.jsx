import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const FMP = () => {
  return (
      <div>
  
    <div  className='flex '>
    <div className='w-1/4 h-screen  my-10 relative top-20'>
      <div className='bg-sky-300  absolute  left-16 w-40 h-48 rounded-xl rotate-45' ></div>
       <div className='bg-sky-600  absolute left-0  w-40 h-48 rounded-xl rotate-45'></div>
    </div>
        <div className='flex flex-col justify-center items-center w-2/4 '>

        <div className=' mx-96 py-10'>
        <FaCircleUser   className='text-9xl ' />
        </div>
        <input  className='border-solid border-2 border-black w-96 p-2 m-3  rounded-md'  type="text" placeholder='Nom' />
        <input  className='border-solid border-2 border-black w-96 p-2 m-3  rounded-md' type="text" placeholder='Prenom' />
        <input className='border-solid border-2 border-black w-96 p-2 m-3  rounded-md' type="number" placeholder='Age' />
        <input className='border-solid border-2 border-black w-96 p-2 m-3  rounded-md'  type="text" placeholder='Adresse' />
        <input className='border-solid border-2 border-black w-96 p-2 m-3  rounded-md'  type="number" placeholder='Numero' />
        
        <Link to='/affichepatient'>
        <button type="submit"  className=' w-96 p-3 m-3  rounded-md  bg-sky-600 text-white font-bold'> Valider</button>
        </Link>

        </div>

    </div>

    </div>
  )
}
