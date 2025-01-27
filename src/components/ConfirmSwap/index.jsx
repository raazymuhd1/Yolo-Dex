import React from 'react'
import { usdt, weth } from "../../assets"
import { MdOutlineClose } from "react-icons/md";
import CustomButton from "../CustomButton";

const ConfirmSwap = ({confirmSwap, setConfirmSwap}) => {
  return (
    <section className={`w-full mx-auto main-theme transition_500 h-full ${confirmSwap ? "fade_in_top" : "fade_out_btm"} flex inset-0 flex-col absolute p-[15px] rounded-[10px]`}>

      <aside className="flex flex-col gap-[20px]"> 
          <div className="flex items-center justify-between text-[#fff]"> 
              <h3 className="font-semibold text-[18px] md:text-[22px] lg:text-[24px]"> Confirm swap </h3>
              <MdOutlineClose onClick={() => setConfirmSwap(false)} className="text-[20px] md:text-[28px] cursor-pointer" />
          </div>

          <div className="w-full flex flex-col gap-[15px]"> 
              <aside className="w-full flex-row-center justify-between main-theme p-[20px] rounded-[15px text-[#fff]"> 
                  <div className="flex-row-center gap-[10px]"> 
                      <img src={usdt} alt="tokenA" className="w-[45px] h-[45px] rounded-[50%]" />
                      <h4 className="font-medium text-[16px] md:text-[18px] lg:text-[22px]"> USDT </h4>
                  </div>

                  <h4 className="text-[16px] md:text-[18px] lg:text-[22px]"> 3,600 </h4>
              </aside>

              <aside className="w-full flex-row-center justify-between main-theme p-[20px] rounded-[15px] text-[#fff]"> 
                  <div className="flex-row-center gap-[10px]"> 
                      <img src={weth} alt="tokenB" className="w-[45px] h-[45px] rounded-[50%]" />
                      <h4 className="font-medium text-[16px] md:text-[18px] lg:text-[22px]"> WETH </h4>
                  </div>

                  <h4 className="text-[16px] md:text-[18px] lg:text-[22px]"> 1 </h4>
              </aside>
          </div>
      </aside>

      <p className="mt-[30px] text-[#fff] w-[90%]"> Output is estimated, You will receive at least 3,600, or the transaction will revert. </p>

      <div className="flex flex-col items-center gap-[15px]"> 
          {/* detail swap */}
          <div className="flex justify-between">

          </div>
          <CustomButton title="Confirm Swap" styles="w-[70%] font-semibold bg-secondary text-main btn_trans cursor-pointer" />
      </div>


    </section>
  )
}

export default ConfirmSwap