import React from 'react'
import logo from '../assets/RVS 1.png'
import perso from '../assets/Ellipse 12.png'
import { BsGridFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export const Sidebard = () => {
  return (
    <div className='flex flex-col'>
        <img className='bg-white rounded-lg mx-auto my-3 border-solid border-2 border-indigo-600 hover:bg-fuchsia-400' src={logo} alt="logosite" />
        

           <button   className='bg-white rounded-md w-full  flex items-center justify-center gap-4 py-5  hover:bg-fuchsia-900 '>
           <BsGridFill />Tableau de bord
           </button>

           <ul className='my-3 mx-auto'>
           <li> <img  className='w-24' src={perso} alt="imagepersonne" /></li>

           <li > 
                  <Link  className='flex items-center  gap-4 py-3 text-white   font-semibold  hover:bg-fuchsia-900'  to='/dashboard/accueil'>  <FaHome /> Accueil   </Link> 
             </li>
           <li > 
                  <Link className='flex items-center  gap-3 py-3 text-white font-semibold  hover:bg-fuchsia-900'  to='/dashboard/mesrendezvous'> <FaConciergeBell  className='text-white'/>  Mes Rendez-Vous </Link>
            </li>

           <li > 
               <Link className='flex items-center  gap-3 py-3 text-white  font-semibold   hover:bg-fuchsia-900'  to='/dashboard/patients'> <FaUserFriends /> Mes Patients </Link> 
            </li>

           <li > 
               <Link className='flex items-center  gap-3 py-3 text-white font-semibold   hover:bg-fuchsia-900'  to='/dashboard/moncompte'> <FaCircleUser /> Mon Compte </Link>
            </li>
        </ul>
        <div className='mx-auto'>
        <button className="bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">

              Deconnexion
        </button>


       </div>
        



    </div>
  )
}
