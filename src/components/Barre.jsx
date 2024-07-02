import React from 'react'
import perso from '../assets/Ellipse 12.png'
import { GoBellFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";


export const Barre = () => {
  return (
    <div className='flex items-center justify-between '>
    
        <input type="search" placeholder='Rechercher ' className='bg-black text-white rounded-full p-5 w-3/5 mx-auto   '/>
        
       

        <div className='flex justify-end gap-3 items-center'>
          < GoBellFill className='text-4xl'/>
          <img className='w-24'  src={perso} alt="persona" />
        </div>
        
    </div>
  )
}
