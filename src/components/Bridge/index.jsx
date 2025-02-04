import React from 'react'
import { RiHistoryFill } from "react-icons/ri";
import BridgeCard from '../BridgeCard';

const Bridge = () => {
  return (
    <section className={`w-[90%] flex flex-col justify-center mx-auto h-[80vh]`}>
        {/* bridge main section */}
        <div 
            className={`flex flex-col min-h-[450px] xl:w-[30%] mx-auto p-[15px] rounded-[10px] lg:w-[40%] w-[70%] second-theme`}>
            {/* bridge header */}
            <aside className="flex-row-center justify-between">
                <div className="flex w-[50%] items-center gap-[20px]">
                    <h3 className='font-bold'> Bridge </h3>
                    {/* token lists */}
                </div>

                {/* transactions history */}
                <RiHistoryFill size={24} className='w-[18px] md:w-[30px] font-bold' />
            </aside>

            <aside className='flex flex-col gap-[10px]'>
                <BridgeCard title="From" />
                <BridgeCard title="To" />
            </aside>
        </div>
    </section>
  )
}

export default Bridge