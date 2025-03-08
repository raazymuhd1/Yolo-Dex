import { useState } from 'react'
import { useWriteContract, useAccount } from 'wagmi'
import { erc20Abi } from 'viem';
import {SwapCard, SwapCard2, CustomButton, Settings, ConfirmSwap} from "../../components"
import { VscSettings } from "react-icons/vsc";
import { MdSwapVerticalCircle } from "react-icons/md";
import { useSwapContext } from "../ContextApi";
import Aurora from "../ui/Aurora"

const Swap = () => {
    const [showSettings, setShowSettings] = useState(false)
    const {writeContract} = useWriteContract();
    const { quoteTrade } = useSwapContext();
    const account = useAccount();
    const [confirmSwap, setConfirmSwap] = useState(false)
    const [slippage, setSlippage] = useState("0");
    const [tokenToTrade, updateTokenTrade] = useState({
       tokenIn: {
         logo: "",
         name: "",
         amount: "",
         address: ""
       },
       tokenOut: {
          logo: "",
          name: "",
          amount: ""
       }
    })

   /**
    * @dev approving the spender to spend the amount of token
    */
   function tokenApproval(token, amount) {
      console.log(token, amount)

      writeContract({
         abi: erc20Abi,
         address: token,
         functionName: 'approve',
         args: [account.address, amount],
      })
   }

  return (
      <section className='w-full '>

         <div className="flex h-full mx-auto xl:w-[30%] md:w-[70%] w-[80%] mt-[110px] flex-col rounded-[15px] bg-mainAlt p-[20px] gap-[10px] relative top-0 overflow-hidden z-[1]"> 
            <div className="flex items-center justify-between w-full"> 
               <h2 className='text-[1vmax] text-textWhite'> Swap </h2>
               <VscSettings 
                  onClick={() => setShowSettings(!showSettings)} className="text-[1vmax] cursor-pointer text-textWhite" />
            </div>

            <div className="flex w-full h-[80%] flex-col items-center mt-[10px]">
                  <SwapCard tokenToTrade={tokenToTrade} updateTokenTrade={updateTokenTrade} />
                  {/* <div className="h-[60px] w-[60px] bg-secondaryAlt rounded-[50%]"> */}
                     <MdSwapVerticalCircle size={40} className=" text-secondaryAlt cursor-pointer" />
                  {/* </div> */}
                  <SwapCard2 tokenToTrade={tokenToTrade} updateTokenTrade={updateTokenTrade} />
            </div>

               <div className="flex w-full items-center justify-between">
                     <h4 className="font-semibold text-textWhite uppercase"> 1 { tokenToTrade.tokenIn.name } = 0.000 {tokenToTrade.tokenOut.name} ($-) </h4>
                     <h4  className="font-semibold text-textWhite"> Fee: -- </h4>
               </div>

               <div className="w-[80%] mx-auto flex items-center gap-[20px]"> 
                  <CustomButton 
                     title={`Approve ${tokenToTrade.tokenIn.name}`} 
                     handleClick={() => tokenApproval(tokenToTrade.tokenIn.address, quoteTrade?.amountIn)}
                     styles="bg-secondaryAlt text-textOrange uppercase cursor-pointer text-[#fff] w-[50%]"   />
                  <CustomButton 
                     handleClick={() => setConfirmSwap(true)}
                     title="Swap"
                     styles="bg-secondaryAlt text-textOrange uppercase cursor-pointer text-[#fff] w-[50%]"  />
               </div>

            <Settings slippage={slippage} setSlippage={setSlippage} showSettings={showSettings} setShowSettings={setShowSettings} />
            <ConfirmSwap tokenToTrade={tokenToTrade} confirmSwap={confirmSwap} setConfirmSwap={setConfirmSwap} />
         </div>

         <Aurora
               colorStops={["#551921", "#FF94B4", "#551921"]}
               blend={1}
               amplitude={1.0}
               speed={0.5} 
         />

      </section>
  )
}

export default Swap