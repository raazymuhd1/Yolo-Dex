import React from 'react'
import { RiHistoryFill } from "react-icons/ri";
import {BridgeCard, CustomButton, BridgeInfo} from '../../components';

const Bridge = () => {
  return (
    <section className={`w-full flex flex-col justify-center h-full`}>
        {/* bridge main section */}
        <div 
            className={`flex flex-col gap-[20px] h-full xl:w-[30%] mx-auto p-[15px] rounded-[10px] lg:w-[40%] w-[70%] mt-[40px] bg-mainAlt`}>
            {/* bridge header */}
            <aside className="flex-row-center justify-between">
                <div className="flex w-[50%] items-center gap-[20px]">
                    <h3 className='font-bold text-textWhite'> Bridge </h3>
                    {/* token lists */}
                    <h4> tokenList </h4>
                </div>

                {/* transactions history */}
                <RiHistoryFill size={24} className='w-[18px] md:w-[30px] font-bold text-textWhite cursor-pointer' />
            </aside>

            <aside className='flex w-full flex-col gap-[10px]'>
                <BridgeCard title="From" />
                <BridgeCard title="To" />
                <CustomButton title="Connect Wallet" styles="w-full h-[40px] bg-textOrange text-secondaryAlt text-[#fff] bg-secondary" />
                <BridgeInfo />
            </aside>
        </div>
    </section>
  )
}

export default Bridge