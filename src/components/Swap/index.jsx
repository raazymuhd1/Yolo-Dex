import { useState } from 'react'
import {SwapCard, SwapCard2, CustomButton, Settings, ConfirmSwap} from "../../components"
import { VscSettings } from "react-icons/vsc";
import { MdSwapVerticalCircle } from "react-icons/md";

const Swap = () => {
    const [showSettings, setShowSettings] = useState(false)
    const [confirmSwap, setConfirmSwap] = useState(false)
    const [tokenToTrade, updateTokenTrade] = useState({
       tokenIn: "",
       tokenOut: "",
       amountInOrOut: ""
    })

    console.log(tokenToTrade)

  return (
    <section className='w-full h-full'>

       <div className="flex mx-auto h-full xl:w-[30%] md:w-[70%] w-[80%] mt-[110px] flex-col rounded-[15px] bg-mainAlt p-[20px] gap-[10px] relative top-0 overflow-hidden"> 
          <div className="flex items-center justify-between w-full"> 
              <h2 className='text-[1.5rem] text-textWhite'> Swap </h2>
              <VscSettings 
               onClick={() => setShowSettings(!showSettings)} className="text-[30px] cursor-pointer text-textWhite" />
           </div>

           <div className="flex w-full h-[80%] flex-col items-center mt-[10px]">
               <SwapCard tokenToTrade={tokenToTrade} updateTokenTrade={updateTokenTrade} />
               {/* <div className="h-[60px] w-[60px] bg-secondaryAlt rounded-[50%]"> */}
                  <MdSwapVerticalCircle size={50} className=" text-secondaryAlt cursor-pointer" />
               {/* </div> */}
               <SwapCard2 tokenToTrade={tokenToTrade} updateTokenTrade={updateTokenTrade} />
           </div>

            <div className="flex w-full items-center justify-between">
                  <h4 className="font-semibold text-textWhite"> 1 WETH = 0.000 USDT ($-) </h4>
                  <h4  className="font-semibold text-textWhite"> Fee: -- </h4>
            </div>

            <div className="w-[80%] mx-auto flex items-center gap-[20px]"> 
               <CustomButton 
                  title={"Approve USDT"} 
                  styles="bg-secondaryAlt text-textOrange cursor-pointer text-[#fff] w-[50%]"   />
               <CustomButton 
                  handleClick={() => setConfirmSwap(true)}
                  title="Swap"
                  styles="bg-secondaryAlt text-textOrange cursor-pointer text-[#fff] w-[50%]"  />
            </div>

           <Settings showSettings={showSettings} setShowSettings={setShowSettings} />
           <ConfirmSwap confirmSwap={confirmSwap} setConfirmSwap={setConfirmSwap} />
       </div>

    </section>
  )
}

export default Swap