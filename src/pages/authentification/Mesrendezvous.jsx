import React from 'react'
import { Barre } from '../../components/Barre'
import { FaCirclePlus } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const Mesrendezvous = () => {
   const date= new Date().toDateString()
   const heure= new Date().toLocaleTimeString()

  return (
    <div className='p-11'>
      <Barre></Barre>

      <div className='flex justify-between items-center my-12'>
        <h2 className='text-sky-600 font-semibold text-4xl'>Mes rendez-vous</h2>

        <Link to='/prdv'>
        <FaCirclePlus  className='text-sky-600 font-semibold text-4xl ' />
        </Link>
        
        

        </div>

<table class="table-auto border-collapse  w-full  border-slate-700">
  
  <tbody>
    {/* premier ligne */}
    <tr>
      <td class="border-b-2  border-slate-700 ">

        <div className='flex items-center  gap-6 py-3'>
            <span><FaRegUserCircle   className='text-5xl   text-sky-600'/></span>

            <div className='flex flex-col'>
               <span  className='text-xl'>{date} </span>
               <span className='text-sky-600  font-semibold text-2xl'> Awa.D </span>
            </div>

         </div>
      </td>

      <td class="border-b-2 border-slate-700 ">

      <div className='flex  items-end flex-col '>
           <span   className='text-xl'>{heure} </span>
           <span className='text-sky-600  font-semibold text-2xl'> 
            <MdArrowForwardIos /> 
            </span>
        </div>
      </td>
      
    </tr>

    {/* deuxieme ligne */}
    <tr>
         <td class="border-b-2  border-slate-700 ">

        <div className='flex items-center  gap-6 py-3'>
            <span><FaRegUserCircle   className='text-5xl   text-sky-600'/></span>

            <div className='flex flex-col'>
               <span   className='text-xl'>{date} </span>
               <span className='text-sky-600  font-semibold text-2xl'> Awa.D </span>
            </div>

         </div>
      </td>

      <td class="border-b-2 border-slate-700 ">

      <div className='flex  items-end flex-col '>
           <span   className='text-xl'>{heure} </span>
           <span className='text-sky-600  font-semibold text-2xl'> 
            <MdArrowForwardIos /> 
            </span>
        </div>
      </td>
      
    </tr>
    
    {/* troisieme ligne */}

    <tr>
     
       <td class="border-b-2  border-slate-700 ">

        <div className='flex items-center  gap-6 py-3'>
            <span><FaRegUserCircle   className='text-5xl   text-sky-600'/></span>

            <div className='flex flex-col'>
               <span   className='text-xl'>{date} </span>
               <span className='text-sky-600  font-semibold text-2xl'> Awa.D </span>
            </div>

         </div>
      </td>

      <td class="border-b-2 border-slate-700 ">

      <div className='flex  items-end flex-col '>
           <span   className='text-xl'>{heure} </span>
           <span className='text-sky-600  font-semibold text-2xl'> 
            <MdArrowForwardIos /> 
            </span>
        </div>
      </td>
      
    </tr>

    {/* quatrieme ligne */}
    <tr>

       <td class="border-b-2  border-slate-700 ">

        <div className='flex items-center  gap-6 py-3'>
            <span><FaRegUserCircle   className='text-5xl   text-sky-600'/></span>

            <div className='flex flex-col'>
               <span  className='text-xl'>{date} </span>
               <span className='text-sky-600  font-semibold text-2xl'> Awa.D </span>
            </div>

         </div>
      </td>

      <td class="border-b-2 border-slate-700 ">

      <div className='flex  items-end flex-col '>
           <span  className='text-xl'>{heure} </span>
           <span className='text-sky-600  font-semibold text-2xl'> 
            <MdArrowForwardIos /> 
            </span>
        </div>
      </td> 

    </tr>
  </tbody>
</table>
      </div>
  )
}
