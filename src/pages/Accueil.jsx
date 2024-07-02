import React from 'react'
import { GoBellFill } from "react-icons/go";
import perso from '../assets/Ellipse 12.png'
import { Card } from '../components/Card';

export const Accueil = () => {

  const table=[
    {
      className :'bg-sky-700 p-11 rounded-lg',
       number:'98' , 
       text:'List des rendez-vous',
    },

    {
      className :'bg-pink-700 p-11 rounded-lg',
       number:'98' , 
       text:'List des patients',
    },

    {
      className :'bg-amber-950 p-11 rounded-lg',
       number:'98' , 
       text:'List des rendez-vous',
    },

    {
      className :'bg-lime-950 p-11 rounded-lg',
       number:'98' , 
       text:'List des rendez-vous',
    },


  ];
  return (
    <div  className='p-10'>

      <div className='flex gap-2  justify-between'>

      <div className='w-1/2'>
           <h3 className='font-semibold text-blue-500'> BIENVENUE DOCTEUR DIOUF </h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum provident fugiat hic rerum necessitatibus incidunt 
            ducimus illo animi libero. Eius laborum alias assumenda, voluptas deleniti nobis repudiandae ipsa soluta. </p>
      </div>
         
      <div className='flex justify-end gap-3 items-center'>
          < GoBellFill className='text-4xl'/>
          <img className='w-24'  src={perso} alt="persona" />
      </div>

     </div>

     <h2 className='text-7xl font-bold my-7'> Rendez-Vous</h2>

     <div className='grid grid-cols-2 gap-6'>

    {table.map((donnee) =>{

      return(
        <Card className={donnee.className}
         number={donnee.number}
          text={donnee.text}></Card>
      )
      
    })
    }
     
      

     </div>


    </div>
  )
}
