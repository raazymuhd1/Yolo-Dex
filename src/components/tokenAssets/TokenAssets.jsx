"use client"
import {useEffect} from 'react'
import { handlingAvailableTokens } from "../../constants"
import { MdArrowBack, MdSearch  } from "react-icons/md";
import { useChainId } from 'wagmi'

const TokenAssets = ({showTokens, setShowTokens, selectedToken, setSelectedToken}) => {
   const chainId = useChainId()

   const handleTokenSelection = (token) => {
      setSelectedToken({
            name: token.name,
            logo: token.logo,
            address: token.address,
            tokenDetails: token.tokenDetails
      })
      setShowTokens(false)
   }

  return (
    <section 
      className={`w-full h-full absolute inset-0 flex flex-col gap-[20px] ${showTokens ? "translate-x-[0px] opacity-1" : "translate-x-[760px] opacity-0 "} transition-all duration-[1s] bg-mainAlt p-[15px] rounded-[15px]`}>
       <aside className="flex-row-center gap-[10px] text-[#fff]">
         <MdArrowBack onClick={() => setShowTokens(false)} className="text-[25px] cursor-pointer" />
         <h4 className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold"> Search token </h4>
       </aside>

       <div 
         tabIndex={1}
         className="flex items-center gap-[10px] p-[10px] rounded-[10px] border-[1px] text-[#fff] active:border-textOrange">
          <input type="text" placeholder="Search token" className="w-[90%] h-full border-none outline-none p-[6px] bg-transparent" />
          <MdSearch  className="w-[10%] text-[28px]" />
       </div>

       <div className="w-full flex-row-center gap-[15px]"> 
          { handlingAvailableTokens(chainId).map(token => (
             <div 
               onClick={() => handleTokenSelection(token)}
               key={token.id} className="w-[fit-content] bg-secondary rounded-[30px] overflow-hidden p-[10px] flex-row-center cursor-pointer">
                 <img src={token.logo} alt="token-logo" className="w-[25px] h-[25px] rounded-[50%]" />
                 <p className="text-[#fff] uppercase text-[.8vmax]"> {token.name} </p>
              </div>
          )) }
       </div>

       {/* token lists */}
       <div className="w-full flex flex-col gap-[15px] overflow-y-auto"> 
           <h3 className="text-[#fff] font-semibold text-[18px] md:text-[22px]"> Select Token </h3>
           { handlingAvailableTokens(chainId).map(token => (
              <div 
               onClick={() => handleTokenSelection(token)}
               key={token.id} 
                 className="flex-row-center w-full justify-between bg-secondary cursor-pointer text-[#fff] p-[10px] rounded-[30px] overflow-hidden"> 
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