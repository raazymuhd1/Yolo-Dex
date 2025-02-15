import { useState } from 'react'
import {SwapCard, CustomButton, Settings, TokenAssets, ConfirmSwap} from "../../components"
import { VscSettings } from "react-icons/vsc";

const Swap = () => {
    const [showSettings, setShowSettings] = useState(false)
    const [showTokens, setShowTokens] = useState(false)
    const [confirmSwap, setConfirmSwap] = useState(true)

  return (
    <section className='w-full h-full flex justify-center'>

       <div className="flex relative xl:w-[30%] md:w-[70%] w-[80%] mt-[110px] min-h-[500px] max-h-[650px] flex-col rounded-[15px] p-[20px] bg-mainAlt"> 
          <div className="flex items-center justify-between w-full"> 
              <h2 className='text-[1.5rem] text-textWhite'> Swap </h2>
              <VscSettings 
               onClick={() => setShowSettings(!showSettings)} className="text-[30px] cursor-pointer text-textWhite" />
           </div>

           <div className="flex w-full h-full flex-col mt-[10px] gap-[20px]">
               <SwapCard title="From" setShowTokens={setShowTokens} />
               <SwapCard title="To" setShowTokens={setShowTokens} />
               <div className="flex w-full items-center justify-between">
                  <h4 className="font-semibold text-textWhite"> 1 WETH = 0.000 USDT ($-) </h4>
                  <h4  className="font-semibold text-textWhite"> Fee: -- </h4>
               </div>
               <div className="w-[80%] mx-auto flex items-center gap-[20px]"> 
                  <CustomButton 
                     title={"Approve USDT"} 
                     styles="bg-textOrange text-secondaryAlt cursor-pointer text-[#fff] w-[50%]"   />
                  <CustomButton 
                     handleClick={() => setConfirmSwap(true)}
                     title="Swap"
                     styles="bg-textOrange text-secondaryAlt cursor-pointer text-[#fff] w-[50%]"  />
               </div>
           </div>

           <Settings showSettings={showSettings} setShowSettings={setShowSettings} />
           <TokenAssets showTokens={showTokens} setShowTokens={setShowTokens}  />
           {/* <ConfirmSwap confirmSwap={confirmSwap} setConfirmSwap={setConfirmSwap} /> */}
       </div>

    </section>
  )
}

export default Swap