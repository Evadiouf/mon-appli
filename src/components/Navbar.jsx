import React from 'react'
import logo from '../assets/RVS 1.png'
import { Outlet, Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div>
  
     <div className='flex justify-between items-center  shadow-2xl'>
        <img src={logo} alt="logosite" />
            <nav >
              <ul className='flex ' >
                 <li className=' mx-3.5 font-semibold  hover:bg-sky-700  ' > 
                   <Link  to='/'> ACCUEIL</Link>
                  </li>

                 <li className='mx-3.5  font-semibold   hover:bg-sky-700'    > 
                    <Link  to='/mesrendezvous'>MES RENDEZ-VOUS </Link>
                  </li>

                 <li className=' mx-3.5 font-semibold   hover:bg-sky-700'>
                    <Link to='/moncompte'>MON COMPTE</Link>
                 </li>
              </ul>
          
            </nav>
        
          <div>
                <button className='bg-sky-500 p-3 text-white rounded-md    hover:bg-pink-300'>Connexion</button>
                <button className='mx-10 bg-black p-3 text-white rounded-md hover:bg-pink-300'>Deconnexion</button>

          </div>

       

      </div>
       <Outlet />

   </div>
  )
}
