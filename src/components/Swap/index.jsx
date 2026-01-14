import { useState, useEffect } from 'react'
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
    const [isAmountEmpty, updateIsAmountEmpty] = useState(false);
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

   
    useEffect(() => {
       const handledBtnDisable = () => {
          const isEmpty = tokenToTrade.tokenIn.amount == 0 && tokenToTrade.tokenOut.amount == 0 ? true : false ;
          updateIsAmountEmpty(isEmpty);
       }

       handledBtnDisable()
    }, [tokenToTrade.tokenIn, tokenToTrade.tokenOut]);

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
      <section className='w-full'>

         <div className="flex mx-auto xl:w-[30%] md:w-[40%] w-[90%] mt-[30px] flex-col rounded-[3rem] swap_dark_glass p-[10px] gap-[10px] relative top-0 overflow-hidden z-[1]"> 
            <div className="flex items-center justify-between w-full"> 
               <h2 className='text-[clamp(1.2rem,2vmax,2rem)] font-bold text-textWhite'> Swap </h2>
               <VscSettings 
                  onClick={() => setShowSettings(!showSettings)} className="text-[clamp(1rem,1.3vmax,1.5rem)] cursor-pointer text-textWhite" />
            </div>

            <div className="flex w-full h-[80%] flex-col items-center mt-[10px]">
                  <SwapCard tokenToTrade={tokenToTrade} updateTokenTrade={updateTokenTrade} />
                  {/* <div className="h-[60px] w-[60px] bg-secondaryAlt rounded-[50%]"> */}
                     <MdSwapVerticalCircle size={40} className=" text-[var(--orange-bg)] cursor-pointer" />
                  {/* </div> */}
                  <SwapCard2 tokenToTrade={tokenToTrade} updateTokenTrade={updateTokenTrade} />
            </div>

               {/* FEE */}
               <div className="flex w-full items-center justify-between">
                     <h4 className="font-semibold text-[var(--grey)] uppercase"> 1 { tokenToTrade.tokenIn.name } = 0.000 {tokenToTrade.tokenOut.name} ($-) </h4>
                     <h4  className="font-semibold text-[var(--grey)]"> Fee: -- </h4>
               </div>

               <div className="w-[80%] mx-auto flex items-center gap-[20px]"> 
                  <CustomButton
                     isDisabled={isAmountEmpty ? true : false} 
                     title={`Approve ${tokenToTrade.tokenIn.name}`} 
                     handleClick={() => tokenApproval(tokenToTrade.tokenIn.address, quoteTrade?.amountIn)}
                     styles={`${tokenToTrade.tokenIn.amount} bg-[var(--orange-bg)] uppercase cursor-pointer text-[var(--white)] w-[50%]`}   />
                  <CustomButton
                     isDisabled={isAmountEmpty ? true : false} 
                     title="Swap"
                     handleClick={() => setConfirmSwap(true)}
                     styles={`bg-[var(--orange-bg)] uppercase cursor-pointer text-[var(--white)] w-[50%]`}  />
               </div>

            <Settings slippage={slippage} setSlippage={setSlippage} showSettings={showSettings} setShowSettings={setShowSettings} />
            <ConfirmSwap tokenToTrade={tokenToTrade} confirmSwap={confirmSwap} setConfirmSwap={setConfirmSwap} />
         </div>

      </section>
  )
}

export default Swap