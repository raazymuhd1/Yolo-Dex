import {useState} from 'react'
import { usdt } from '../../assets';
import { RiHistoryFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import {CustomButton} from '../../components';
import BridgeCard from "./BridgeCard"
import BridgeInfo from "./BridgeInfo"
import BridgeHistory from './BridgeHistory';
import BridgeTokens from './BridgeTokens';

const Bridge = () => {
        const [showTokens, setShowTokens] = useState(false)
        const [showHistory, setShowHistory] = useState(false)

  return (
    <section className={`w-full h-full`}>
        {/* bridge main section */}

        <div 
            className={`flex flex-col gap-[20px] h-full xl:w-[30%] mx-auto p-[15px] rounded-[10px] lg:w-[40%] w-[70%] mt-[100px] bg-mainAlt overflow-hidden relative top-0`}>
            {/* bridge header */}
            <aside className="flex-row-center w-full justify-between">
                <div className="flex w-[50%] items-center gap-[20px]">
                    <h3 className='font-bold text-textWhite'> Bridge </h3>
                    <div 
                        onClick={() => setShowTokens(true)}
                        className="flex-row-center justify-center w-[fit-content] gap-[5px] bg-secondary rounded-[8px] p-[4px] cursor-pointer">
                       <img src={usdt} alt="assets" className="w-[25px] h-[25px] object-cover" />
                       <h4 className='text-[.6vmax] font-bold text-textWhite uppercase'> Usdt </h4>
                       <MdKeyboardArrowDown size={20} className="text-textWhite font-bold" />
                    </div>
                </div>

                {/* transactions history */}
                <RiHistoryFill size={24} className='w-[18px] md:w-[30px] font-bold text-textWhite cursor-pointer' />
            </aside>

            <aside className='flex h-full w-full flex-col gap-[10px]'>
                <BridgeCard title="From" />
                <BridgeCard title="To" />
                <CustomButton title="Connect Wallet" styles="w-full h-[40px] bg-secondaryAlt text-textOrange text-[#fff] bg-secondary" />
                <BridgeInfo />
            </aside>

            <BridgeTokens setShowTokens={setShowTokens} showTokens={showTokens} />
            <BridgeHistory { ...{ showHistory, setShowHistory } } />
        </div>
    </section>
  )
}

export default Bridge