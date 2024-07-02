import React from 'react'
import { LuPencilLine } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

export const Affichagepatient = () => {
  return (
    <div> 
       
       
       <div className='py-32'> 
        <FaUserCircle className='text-9xl text-sky-600 mx-auto' />
        </div>
       

       <div className='flex flex-col space-y-4 '>
        <div class="border-4 border-black w-96 m-auto">
          <div className='flex space-x-20'>
             <p className=' inline-block align-middle font-semibold '>Prenom :  </p>
             <p > Pathe</p>
             <div > <span> <LuPencilLine  /></span> </div>
           </div>
        </div>
         {/* autre */}

         <div class="border-4 border-black w-96 m-auto">
          <div className='flex space-x-20'>
             <p className=' inline-block align-middle font-semibold '>Nom :  </p>
             <p > Fall</p>
             <div > <span> <LuPencilLine  /></span> </div>
           </div>
        </div>
         {/* autre */}
         <div class="border-4 border-black w-96 m-auto">
          <div className='flex space-x-20'>
             <p className=' inline-block align-middle font-semibold '>Age:  </p>
             <p > 15</p>
             <div > <span> <LuPencilLine  /></span> </div>
           </div>
        </div>

        {/* autre */}
        <div class="border-4 border-black w-96 m-auto">
          <div className='flex space-x-20'>
             <p className=' inline-block align-middle font-semibold '>Adresse: </p>
             <p > Cite Socabeg </p>
             <div > <span> <LuPencilLine  /></span> </div>
           </div>
        </div>

         {/* autre */}
         <div class="border-4 border-black w-96 m-auto">
          <div className='flex space-x-20'>
             <p className=' inline-block align-middle font-semibold '>Telephone: </p>
             <p > 77 000 </p>
             <div > <span> <LuPencilLine  /></span> </div>
           </div>
        </div>


        </div>


    </div>
  )
}
