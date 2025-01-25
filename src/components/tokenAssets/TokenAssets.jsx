import React from 'react'
import { tokens } from "../../constants"
import { MdArrowBack, MdSearch  } from "react-icons/md";

const TokenAssets = ({showTokens, setShowTokens}) => {
  return (
    <section className={`w-full h-full absolute inset-0 flex flex-col gap-[20px] ${showTokens ? "translate-x-[0px] opacity-1" : "translate-x-[680px] opacity-0"} transition-all duration-[1s] main-theme p-[15px] rounded-[15px]`}>
       <aside className="flex-row-center gap-[10px] text-[#fff]">
         <MdArrowBack onClick={() => setShowTokens(false)} className="text-[25px] cursor-pointer" />
         <h4 className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold"> Search token </h4>
       </aside>

       <div className="flex items-center gap-[10px] p-[10px] rounded-[10px] border-[1px] text-[#fff]">
          <input type="text" placeholder="Search token" className="w-[90%] h-full border-none outline-none p-[6px] bg-transparent" />
          <MdSearch  className="w-[10%] text-[28px]" />
       </div>

       <div className="w-full flex-row-center gap-[15px]"> 
          { tokens.map(token => (
             <div key={token.id} className="w-[fit-content] second-theme rounded-[30px] overflow-hidden p-[10px] flex-row-center gap-[10px] cursor-pointer">
                 <img src={token.logo} alt="token-logo" className="w-[25px] h-[25px] rounded-[50%]" />
                 <p className="text-[#fff] uppercase text-[14px] md:text-[16px]"> {token.name} </p>
              </div>
          )) }
       </div>

       {/* token lists */}
       <div className="w-full flex flex-col gap-[15px]"> 
           <h3 className="text-[#fff] font-semibold text-[18px] md:text-[22px]"> Select Token </h3>
           { tokens.map(token => (
              <div key={token.id} 
                 className="flex-row-center w-full justify-between second-theme cursor-pointer text-[#fff] p-[10px] rounded-[30px] overflow-hidden"> 
                 <aside className="flex-row-center gap-[10px]"> 
                     <img src={token.logo} alt="token-logo" className="w-[35px] h-[35px] rounded-[50%]" />
                    <p className="uppercase text-[16px] md:text-[18px] lg:text-[22px]"> {token.name} </p>
                 </aside>

                 <h4 className="font-semibold text-[16px] md:text-[20px]"> 0 </h4>
              </div>
           )) }
       </div>
    </section>
  )
}

export default TokenAssets