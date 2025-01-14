import React from 'react'
import SwapCard from "../SwapCard"

const Swap = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
       <div className="flex w-[45%] mt-[40px] h-[500px] flex-col rounded-[15px] p-[20px] bg-[#cd85af]"> 
          <div className="flex items-center justify-between w-full"> 
              <h2 className='text-[3rem] text-black'> Swap </h2>
              {/* settings icons */}
           </div>

           <div className="flex w-full h-full flex-col mt-[10px] gap-[20px]">
               <SwapCard />
               <SwapCard />
           </div>
       </div>
    </div>
  )
}

export default Swap