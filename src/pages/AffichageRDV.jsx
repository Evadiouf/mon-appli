import React from 'react'
import { LuPencilLine } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

export const AffichageRDV = () => {
  return (
    <div>
      
      <div className='py-32'> 
        <FaUserCircle className='text-9xl text-sky-600 mx-auto' />
      </div>
       
        <div class="border-4 border-black w-96 mx-auto ">
            <div  className='flex space-x-14 m-3'>
               <p > Titre Rendez-Vous :  Consultation  </p>
               <span> <LuPencilLine  /></span>
            </div>
         {/* autre */}  

         <div  className='flex space-x-14 m-3'>
               <p > Avec  : Docteur Sall </p>
               <span> <LuPencilLine  /></span>
         </div>

         {/* autre */}  

         <div  className='flex space-x-14 m-3'>
               <p > Date:  2024/05/02 </p>
               <span> <LuPencilLine  /></span>
         </div>

          {/* autre */}  

          <div  className='flex space-x-14 m-3'>
               <p > Heure: 12h:00 </p>
               <span> <LuPencilLine  /></span>
         </div>

         {/* autre */}  

         <div  className='flex space-x-14 m-3'>
               <p > Lieu: Liberte 6 </p>
               <span> <LuPencilLine  /></span>
         </div>

        </div>

        <div>
            <button type="submit"  className=' w-96 p-3 m-3  rounded-md  bg-sky-600 text-white font-bold ' > Valider</button>
        </div>
    </div>
  )
}
