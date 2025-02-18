import {useState} from 'react'
import { Networks } from "../../components"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { weth } from "../../assets"

const SwapCard = ({title, setShowTokens}) => {

  return (
    <div className="w-full flex flex-col gap-[10px] h-[40%] bg-secondary rounded-[10px] p-[10px]">

       <div className="flex items-center w-full justify-between p-[5px]"> 
           <h4 className="uppercase text-textWhite"> {title} </h4>
           <aside className="grid w-[50%] grid-cols-[repeat(2,minmax(10%,25%))] items-center justify-end gap-[5px] ">
              <h3 className={`${title.toLowerCase() == "from" ? "block" : "hidden"} font-semibold text-textWhite text-[.7vmax]`}> Balance: <strong className="font-bold text-textWhite text-[.7vmax]"> 0 </strong> </h3>
              <h5 className={`${title.toLowerCase() == "to" && "hidden"} cursor-pointer text-[.7vmax] text-center w-[fit-content] p-[5px] bg-mainAlt font-bold text-secondaryAlt rounded-[15px]`}> Max </h5>
           </aside>
       </div>

       {/* middle section */}
       <div className="w-full h-[80px] flex items-center gap-[10px]">
        {/* token lists */}
          <aside
            onClick={() => setShowTokens(true)} 
            className="w-[30%] border-secondaryAlt border-[1px] flex items-center gap-[8px] p-[8px] bg-main rounded-[10px]  cursor-pointer">
              <img src={weth} alt="token-logo" className="h-[35px] w-[35px] rounded-[50%]" />
              <h4 className="text-[.9vmax] text-[#fff] uppercase"> Weth </h4>
              <MdOutlineKeyboardArrowDown className="text-[25px] md:text-[35px] text-[#fff]" />
          </aside>
          <input 
            type="text" 
            placeholder="0" 
            className="w-[80%] h-full text-[30px] md:text-[40px] outline-none text-right placeholder:text-right text-[#fff] bg-transparent" />
       </div>

       {/* bottom section */}
       <div className="w-full flex items-center justify-between"> 
          <h5 className="cursor-pointer p-[5px] text-[14px] w-[40px] text-center bg-main text-secondaryAlt rounded-[15px] font-bold"> Max </h5>
          <h5 className="font-bold text-textWhite"> $3,500 </h5>
       </div>
    </div>
  )
}

export default SwapCard