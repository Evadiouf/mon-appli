import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { Barre } from '../components/Barre';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';




export const Patients = () => {
  return (
     <div className='p-11'>
      <Barre></Barre>

      <div className='flex justify-between items-center my-12'>
        <h2 className='text-sky-600 font-semibold text-4xl'>Mes rendez-vous</h2>
        <Link to='/fmp'>
        <FaCirclePlus  className='text-sky-600 font-semibold text-4xl ' />
        </Link>
     </div>

      
     <table className='w-full' >
  <thead>
    <tr>
      <div className='flex justify-between gap-40'>
      <th  >Nom</th>
      <th >Prenom</th>
      <th  >Profil</th>
      </div>
    </tr>
  </thead>


  <tbody>
     {/* premier ligne */}
    <tr className='border-collapse border border-slate-800 '>
      <div className='flex justify-between gap-40  '>
        
          <td>
           <span> <FaUser  className='float-left  text-4xl py-2 '/> </span>
           <span className='text-2xl m-3'> Awa</span>
          </td>

          <td> <span className='text-2xl m-3'> Diouf</span></td>
      
      <div>
        <td className='items-end'> 
           <button className='bg-green-900 p-3 text-white rounded-md w-14 m-2   hover:bg-pink-300'>Voir</button>
        </td>
      </div>

     
      </div>
    </tr>
 {/* premier ligne */}
    <tr className='border-collapse border border-slate-800 '>
      <div  className='flex justify-between gap-40' >

      <td>
        <span> <FaUser  className='float-left  text-4xl py-2 '/> </span>
        <span  className='text-2xl m-3'>Fatim</span>
       </td>

      <td><span className='text-2xl m-3'> Sarr</span> </td>
       
      <div>
        <td className='items-end'> 
           <button className='bg-green-900 p-3 text-white rounded-md w-14 m-2   hover:bg-pink-300'>Voir</button>
        </td>
      </div>

      </div>
    </tr>
    {/* premier ligne */}

    <tr  className='border-collapse border border-slate-800 '>
      <div className='flex justify-between gap-40'>
      <td> 
       <span> <FaUser  className='float-left  text-4xl py-2 '/> </span>
        <span   className='text-2xl m-3'> Oulimata</span>
      </td>
      <td> <span  className='text-2xl m-3'> Toure</span></td>


      <div>
        <td className='items-end'> 
           <button className='bg-green-900 p-3 text-white rounded-md  w-14 m-2 hover:bg-pink-300'>Voir</button>
        </td>
      </div>

      </div>
    </tr>
  </tbody>
</table>

           
    </div>
    
      
  )
}
