import React from 'react'
import {SwapCard, CustomButton, Settings} from "../../components"
import { VscSettings } from "react-icons/vsc";


const Swap = () => {
  return (
    <div className='w-full h-full flex justify-center'>

       <div className="flex relative w-[35%] mt-[110px] min-h-[500px] max-h-[650px] flex-col rounded-[15px] p-[20px] bg-[#cd85af]"> 
          <div className="flex items-center justify-between w-full"> 
              <h2 className='text-[1.5rem] text-black'> Swap </h2>
              <VscSettings className="text-[30px] cursor-pointer" />
           </div>

           <div className="flex w-full h-full flex-col mt-[10px] gap-[20px]">
               <SwapCard title="From" />
               <SwapCard title="To" />
               <div className="flex items-center justify-between">
                  <h4 className="font-semibold"> 1 WETH = 0.000 USDT ($-) </h4>
                  <h4  className="font-semibold"> Fee: -- </h4>
               </div>
               <div className="w-[80%] mx-auto flex items-center gap-[20px]"> 
                  <CustomButton title={"Approve USDT"} styles="w-[50%] bg-secondary text-main btn_trans"  />
                  <CustomButton title={"Swap"} styles="w-[50%] bg-secondary text-main btn_trans"  />
               </div>
           </div>

           <Settings />
       </div>

    </div>
  )
}

export default Swap