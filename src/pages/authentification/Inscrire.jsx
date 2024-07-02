import React from 'react'
import { TbBrandGoogle } from "react-icons/tb";
import {  Link } from "react-router-dom";

export const Inscrire = () => {
  return (
    
    <div className='flex overflow-hidden'>

    <div className='w-1/4 h-screen  my-28 relative top-40'>
      <div className='bg-sky-300  absolute  left-16 w-40 h-48 rounded-xl rotate-45' ></div>
       <div className='bg-sky-600  absolute left-0  w-40 h-48 rounded-xl rotate-45'></div>
    </div>
    <div className='flex flex-col justify-center items-center w-2/4 mt-0'>
      <h3 className='text-3xl  font-semibold'> S'inscrire </h3>
      <input  className='w-full p-3 m-3 bg-neutral-200 rounded-md'  type="text"   placeholder='Nom'/>
      <input  className='w-full p-3 m-3 bg-neutral-200 rounded-md'  type="text"   placeholder='Prenom'/>
      <input  className='w-full p-3 m-3 bg-neutral-200 rounded-md'  type="text"   placeholder='Adresse email'/>
      <input className='w-full p-3 m-3 bg-neutral-200  rounded-md'  type="password" placeholder='Mot de passe' />
      <Link to='/connexion' className='w-full'>
            <button className='bg-sky-500 text-white py-3 w-full rounded-md font-semibold'>Se connecterr</button>
       </Link>

       <Link to='/connexion'  className='w-full'>
            <button className='bg-black  my-4 text-white py-3 w-full rounded-md font-semibold flex  items-center justify-center'>Continuez avec google
            <TbBrandGoogle />
            </button>
       </Link>

       

       <div className='w-1/4 '>
            <div className='bg-sky-300  absolute  right-28 w-56 h-48 rounded-xl rotate-45' ></div>
            <div className='bg-sky-600  absolute right-16 w-56 h-48 rounded-xl rotate-45'></div>


       </div>


    </div>
    
    
  </div>


  )
}
