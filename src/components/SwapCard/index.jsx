import {useState} from 'react'
import { Networks } from "../../components"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { weth } from "../../assets"

const SwapCard = ({title}) => {
      const [showTokens, setShowTokens] = useState(false)

  return (
    <div className="w-full flex flex-col gap-[10px] h-[50%] main-theme rounded-[10px] p-[20px]">

       <div className="flex items-center w-full justify-between"> 
           <h4 className="uppercase"> {title} </h4>
          <Networks />
       </div>

       {/* middle section */}
       <div className="w-full flex items-center gap-[10px]">
        {/* token lists */}
          <aside
            onClick={() => setShowTokens(true)} 
            className="w-[30%] flex items-center gap-[8px] p-[8px] bg-main cursor- rounded-[10px]">
              <img src={weth} alt="token-logo" className="h-[35px] w-[35px] rounded-[50%]" />
              <h4 className="text-[16px] md:text-[20px] lg:text-[25px] text-[#fff] uppercase"> Weth </h4>
              <MdOutlineKeyboardArrowDown className="text-[25px] md:text-[35px] text-[#fff]" />
          </aside>
          <input 
            type="text" 
            placeholder="0" 
            className="w-[70%] text-[30px] md:text-[40px] outline-none bg-transparent p-[10px] text-right placeholder:text-right text-[#fff] " />
       </div>

       {/* bottom section */}
       <div className="w-full flex items-center justify-between"> 
          <h5 className="cursor-pointer p-[5px] text-[14px] w-[40px] text-center bg-main rounded-[15px]"> Max </h5>
          <h5 className=""> $3,500 </h5>
       </div>
    </div>
  )
}

export default SwapCard