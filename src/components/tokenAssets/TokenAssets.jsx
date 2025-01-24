import React from 'react'
import { weth, usdt, usdc, dai, doge } from "../../assets";
import { MdArrowBack, MdSearch  } from "react-icons/md";

const TokenAssets = ({showTokens, setShowTokens}) => {
  return (
    <section className={`w-full h-full absolute inset-0 flex flex-col gap-[20px] ${showTokens ? "translate-x-[0px] opacity-1" : "translate-x-[680px] opacity-0"} transition-all duration-[1s] main-theme p-[15px] rounded-[15px]`}>
       <aside className="flex-row-center gap-[10px]">
         <MdArrowBack onClick={() => setShowTokens(false)} className="text-[25px] cursor-pointer" />
         <h4 className="text-[14px] md:text-[16px] lg:text-[18px]"> Select token </h4>
       </aside>

       <div className="flex items-center gap-[10px] p-[10px] rounded-[10px] border-[1px]">
          <input type="text" placeholder="Search token" className="w-[90%] h-full border-none outline-none p-[6px] bg-transparent" />
          <MdSearch  className="w-[10%]" />
       </div>
    </section>
  )
}

export default TokenAssets