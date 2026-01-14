import React from 'react'
import { networkLists } from "../../constants"
import { MdArrowBack  } from "react-icons/md";

const BridgeChains = ({showChains, setShowChains, setSelectedNetwork}) => {
  return (
    <section 
      className={`w-full h-full absolute inset-0 flex flex-col gap-[20px] ${showChains ? "translate-x-[0px] opacity-1" : "translate-x-[760px] opacity-0 "} transition-all duration-[1s] bg-mainAlt p-[15px] rounded-[15px]`}>
         <aside className="flex-row-center gap-[10px] text-[#fff]">
         <MdArrowBack onClick={() => setShowChains(false)} className="text-[25px] cursor-pointer" />
         <h4 className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold"> Select Chain </h4>
       </aside>

       {/* network lists */}
       <div className="w-full flex flex-col gap-[15px] overflow-y-auto"> 
           { networkLists.map(network => (
              <div 
                  onClick={() => {
                     setShowChains(false)
                     setSelectedNetwork(network)
                  }}
                  key={network.id} 
                 className="flex-row-center w-full justify-between bg-secondary cursor-pointer text-[#fff] p-[10px] rounded-[30px] overflow-hidden transition-[background] duration-500 hover:bg-[var(--orange-bg)]"> 
                 <aside 
                  className="flex-row-center gap-[10px]"> 
                     <img src={network.logo} alt="token-logo" className="w-[35px] h-[35px] rounded-[50%]" />
                    <p className="uppercase text-[.8vmax] font-bold"> {network.name} </p>
                 </aside>
              </div>
           )) }
       </div>
    </section>
  )
}

export default BridgeChains