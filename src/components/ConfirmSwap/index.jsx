import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import CustomButton from "../CustomButton";
import SwapInfo from "../SwapInfo";

const ConfirmSwap = ({tokenToTrade, confirmSwap, setConfirmSwap}) => {
        const {tokenIn, tokenOut} = tokenToTrade;

  return (
    <section className={`bg-mainAlt transition_500 w-full h-full ${confirmSwap ? "scale-[1] opacity-[1] translate-y-[0px]" : "translate-y-[760px] opacity-0  scale-0" } flex flex-col p-[15px] inset-0 absolute rounded-[10px]`}>

      <aside className="flex flex-col gap-[20px]"> 
          <div className="flex items-center justify-between text-[#fff]"> 
              <h3 className="font-semibold text-[1vmax]"> Confirm swap </h3>
              <MdOutlineClose 
                onClick={() => setConfirmSwap(false)} 
                className="text-[1vmax] cursor-pointer " />
          </div>

          <div className="w-full flex flex-col gap-[15px]"> 
              <aside className="w-full flex-row-center justify-between bg-secondary p-[20px] rounded-[15px text-[#fff]"> 
                  <div className="flex-row-center gap-[10px]"> 
                      <img src={tokenIn?.logo} alt="tokenA" className="w-[45px] h-[45px] rounded-[50%]" />
                      <h4 className="text-[1vmax] font-bold uppercase"> { tokenIn?.name } </h4>
                  </div>

                  <h4 className="text-[1vmax] font-semibold"> { tokenIn?.amount } </h4>
              </aside>

              <aside className="w-full flex-row-center justify-between bg-secondary p-[20px] rounded-[15px] text-[#fff]"> 
                  <div className="flex-row-center gap-[10px]"> 
                      <img src={tokenOut?.logo} alt="tokenB" className="w-[45px] h-[45px] rounded-[50%]" />
                      <h4 className="text-[1vmax] font-bold uppercase"> { tokenOut.name } </h4>
                  </div>

                  <h4 className="text-[1vmax] font-semibold"> {tokenOut?.amount} </h4>
              </aside>
          </div>
      </aside>

      <p className="mt-[30px] text-[#fff] xl:text-[.8vmax] text-[1vmax] w-[90%]"> Output is estimated, You will receive at least 3,600, or the transaction will revert. </p>

      <div className="flex flex-col items-center gap-[15px] mt-[10px]"> 
          {/* detail swap */}
          <SwapInfo tokenToTrade={tokenToTrade} />
          <CustomButton title="Confirm Swap" styles="w-[70%] font-semibold bg-secondaryAlt text-textOrange btn_trans cursor-pointer" />
      </div>


    </section>
  )
}

export default ConfirmSwap