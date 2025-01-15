import React from 'react'
import SwapCard from "../SwapCard"
import { VscSettings } from "react-icons/vsc";


const Swap = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
       <div className="flex w-[45%] mt-[40px] min-h-[500px] flex-col rounded-[15px] p-[20px] bg-[#cd85af]"> 
          <div className="flex items-center justify-between w-full"> 
              <h2 className='text-[1.5rem] text-black text-[#fff]'> Swap </h2>
              <VscSettings className="text-[30px] cursor-pointer" />
           </div>

           <div className="flex w-full h-full flex-col mt-[10px] gap-[20px]">
               <SwapCard title="From" />
               <SwapCard title="To" />
           </div>
       </div>
    </div>
  )
}

export default Swap