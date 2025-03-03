"use client"
import {useRef, useState} from 'react'
import CustomButton from "../CustomButton"
import { MdOutlineClose } from "react-icons/md";

const presetSlippagePercentage = ["5", "1", "2"]

const Settings = ({showSettings, setShowSettings}) => {
     const slippageRef = useRef(null)
     const presetSlippageRef = useRef(null)
     const [slippageTol, setSlippageTol] = useState('');

     const handlingSlippagePercentage = () => {
         if(slippageRef.current) {
            slippageRef.current.focus();
            slippageRef.current.value = presetSlippageRef.current.textContent;
            console.log(presetSlippageRef.current)
         }
     }


  return (
    <section className={`h-[50%] w-full ${showSettings ? "block translate-y-[-30px] opacity-1" : "translate-y-[340px]"} absolute bottom-0 left-0 p-[15px] rounded-[15px] bg-mainAlt transition_500`}>
       <div className='flex flex-col gap-[5px]'>
          <div className="w-full flex justify-between items-center">
              <h2 className="text-[#fff]"> Setting </h2>
              <MdOutlineClose className="text-[#fff] cursor-pointer" onClick={() => setShowSettings(false)} />
          </div>
          {/* close icon */}
          {/* separator */}
          <div className="h-[0.5px] w-full bg-main" />
       </div>
       <aside className="flex flex-col gap-[20px] mt-[10px]">
          <h4 className="text-[#fff]"> Slippage tolerance </h4>
          <aside className="flex items-center gap-[10px]">
             { presetSlippagePercentage.map((percent, idx) => (
                <p
                  ref={presetSlippageRef} 
                  key={idx} onClick={handlingSlippagePercentage} className="percentage-settings">{percent}%</p>
             )) }
            <input
              ref={slippageRef} 
              value={slippageTol}
              onChange={(e) => setSlippageTol(e.target.value)}
              type="text" placeholder="0%" className="w-[100px] bg-main placeholder:text-secondaryAlt p-[8px] rounded-[10px] text-[#fff] border-none outline-none" />
          </aside>

          <h4 className="text-[#fff]"> Transaction deadline </h4>
          <aside className="flex items-center gap-[10px]">
            <input type="text" placeholder="deadline" className="w-[150px] placeholder:text-secondaryAlt bg-main p-[8px] rounded-[10px] focus:border-textOrange focus:border-[1px] text-[#fff] border-none outline-none" />
            <p className="text-[#fff]"> Minutes </p>
          </aside>

          <CustomButton title="Save" styles="w-full bg-secondary text-secondaryAlt bg-textOrange"  />
       </aside>
    </section>
  )
}

export default Settings