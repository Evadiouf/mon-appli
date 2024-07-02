import React from 'react'
import { Sidebard } from './Sidebard'
import { Accueil } from '../pages/Accueil'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='flex'>
        <div className='w-1/5  h-screen bg-sky-300 shadow-2xl'>
           <Sidebard></Sidebard>
        </div>

        <div className='w-4/5 h-screen  shadow-2xl'>
            
            <Outlet></Outlet>
        </div>

        
    </div>
  )
}
