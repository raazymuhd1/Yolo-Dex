import React from 'react'
import CustomButton from "../CustomButton"
import { MdOutlineClose } from "react-icons/md";

const Settings = () => {
  return (
    <section className={`h-[50%] w-full absolute bottom-0 left-0 right-0 p-[15px] rounded-[15px] bg-secondary`}>
       <div className='flex flex-col gap-[5px]'>
          <div className="w-full flex justify-between items-center">
              <h2 className="text-[#fff]"> Setting </h2>
              <MdOutlineClose className="text-[#fff]" />
          </div>
          {/* close icon */}
          {/* separator */}
          <div className="h-[0.5px] w-full bg-main" />
       </div>
       <aside className="flex flex-col gap-[20px] mt-[10px]">
          <h4> Slippage tolerance </h4>
          <aside className="flex items-center gap-[10px]">
            <p className="percentage-settings">0.5%</p>
            <p className="percentage-settings">1%</p>
            <p className="percentage-settings">2%</p>
            <input type="text" placeholder="0%" className="w-[100px] bg-main p-[8px] rounded-[10px]" />
          </aside>

          <h4> Transaction deadline </h4>
          <aside className="flex items-center gap-[5px]">
            <input type="text" placeholder="deadline" className="w-[150px] bg-main p-[8px] rounded-[10px]" />
            <p> Minutes </p>
          </aside>

          <CustomButton title="Save" styles="w-full bg-main text-secondary btn_trans"  />
       </aside>
    </section>
  )
}

export default Settings