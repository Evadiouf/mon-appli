import React from 'react'
import { FaUsers } from "react-icons/fa";

export const Card = (props) => {
  return (
    <div className={props.className}>

        <div className='flex justify-center items-center'>
           <p className='bg-white p-4 rounded-xl'> {props.number}  </p>

           <div  className='bg-white p-4 rounded-full'>
                <FaUsers />
           </div>
          
        </div>
        <h4 className='text-white text-4xl  text-center'> {props.text} </h4>


    </div>
  )
}
