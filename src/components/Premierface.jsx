import React from 'react'
import img2 from '../assets/image1.png'
import { Link } from "react-router-dom";


export const Premierface = () => {
  return (
    <div className='flex items-center p-10 overflow-hidden'>
        <div>
            <h1 className='text-9xl p-9'> Rendez-Vous </h1>
            <p className='my-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Non facilis saepe ab culpa. Omnis,autem, quo blanditiis
                ab pariatur ipsum inventore ducimus perferendis eius expedita error
                 ab pariatur ipsum inventore ducimus perferendis eius expedita error.</p>
            
            <Link to='/connexion'>
            <button className='bg-sky-500 text-white py-3 w-full rounded-md font-semibold'>Commencer</button>
            </Link>
           
        </div>
      <div>
            <img src={img2} className='max-w-xl	 ' alt="image accueil" />
            

            <div className='my-8 relative bottom-16' >
               <div className='bg-sky-300  absolute  right-28 w-56 h-48 rounded-xl rotate-45' ></div>
               <div className='bg-sky-600  absolute right-16 w-56 h-48 rounded-xl rotate-45'></div>

            </div>
        </div>
    </div>
  )
}
