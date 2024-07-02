import React from 'react'
import perso from '../assets/Ellipse 12.png'
import { LuPencilLine } from "react-icons/lu";

export const Moncompte = () => {
  return (
    <div>
       <h2 className='text-5xl text-blue-600 text-center py-6'>Rendez-vous</h2>

       <div className='flex  py-4'>
       <img  className='w-28  mx-10 ml-28'   src={perso} alt="imagepersonne " />
        <div className='bg-sky-600  w-full h-10 py-10 my-6' >  </div>
       </div>
       
       <div className='flex flex-col space-y-4 '>
        
       <div className="border-2 border-black  w-96 h-28 mx-auto  py-6 px-6">
        <p className='text-2xl text-sky-600 font-bold'> Docteur Diouf</p>
        <p className='text-xl'> Dentiste</p>
       </div>
       {/* autre */}
       <div className="border-2 border-black  w-96 h-5 mx-auto  p-6 rounded-lg  ">
          <div className='flex space-x-4'>
             <p className=' inline-block align-middle  '>Adreese: Rufisque Ouest , cite Socabeg </p>
             <div>   <span>  <LuPencilLine /> </span> </div>
          </div>
       </div>

       {/* autre */}

       <div className="border-2 border-black  w-96 h-5 mx-auto  p-6 rounded-lg  ">
          <div className='flex space-x-4'>
             <p className=' inline-block align-middle  '>Telephone :  77 000 11 22 </p>
             <div>   <span>  <LuPencilLine /> </span> </div>
          </div>
       </div>

        {/* autre */}

        <div className="border-2 border-black  w-96 h-5 mx-auto  p-6 rounded-lg  ">
          <div className='flex space-x-4'>
             <p className=' inline-block align-middle  '>Adresse email : diouf@gmail.com </p>
             <div>   <span>  <LuPencilLine /> </span> </div>
          </div>
       </div>

       {/* autre */}

       <div className="border-2 border-black  w-96 h-5 mx-auto  p-6 rounded-lg  ">
          <div className='flex space-x-4'>
             <p className=' inline-block align-middle  '>Mot de passe : ................. </p>
             <div>   <span>  <LuPencilLine /> </span> </div>
          </div>
       </div>

       <button type="submit"  className=' w-96 p-3 mx-auto  rounded-md  bg-sky-600 text-white font-bold'>Enregistrer</button>


      </div>

      
    </div>
  )   
} 
