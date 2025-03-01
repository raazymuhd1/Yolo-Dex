import { useState } from 'react'
// import { MdAccessTime, MdAccountBalanceWallet, MdAttachMoney   } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdCheckCircle  } from "react-icons/md";

const BridgeInfo = () => {
      const [bridgeInfos, setBridgeInfos] = useState([
        {id: 0, title: "Recipient's Address", value: "0x00", Icon: ""},
        {id: 1, title: "Time Spend", value: "<10s", Icon: ""},
        {id: 2, title: "Withholding Fees", value: "0.0035", Icon: ""},
        {id: 3, title: "Trading Fees", value: "0.05%", Icon: ""},
        {id: 4, title: "You'll Receive", value: "1 ETH", Icon: ""},
      ])
      const [showInfo, setShowInfo] = useState(false)

  return (
    <section className={`overflow-y-hidden w-full`}>
      <div 
        onClick={() => setShowInfo(!showInfo)}
        className="cursor-pointer w-full flex justify-between">
        <aside className="flex-row-center gap-[10px]">
            <h4 className="font-semibold text-[.8vmax] text-textWhite"> Total Send </h4>
            <MdCheckCircle size={20} className='text-textWhite' />
        </aside>

       { showInfo ? <MdKeyboardArrowUp size={24} className="cursor-pointer text-textWhite" /> : <MdKeyboardArrowDown size={24} className="cursor-pointer text-textWhite" /> }
      
      </div>
     
       <aside className={` ${showInfo ? "flex flex-col opacity-1 translate-y-[0px]" : "translate-y-[300px] hidden"} border-[1px] p-[10px] rounded-[10px]`}>
          { bridgeInfos.map((info, idx) => (
            <div key={info.id} 
                className={`flex flex-col gap-[10px]`}>
                <div className="flex-row-center justify-between w-full">
                    <div className="flex-row-center gap-[5px]">
                    {/* icon */}
                        <p className='text-textWhite font-normal text-[.8vmax]'> {info.title} </p>
                    </div>

                    <h3 className="font-bold text-[.8vmax]  text-textWhite"> {info.value} </h3>
                </div>
                  <div className={`h-[0.1px] w-full ${idx == 1 ? "block": "hidden"} bg-[#fff]`} />
            </div>
          )) }
       </aside>
    </section>
  )
}

export default BridgeInfo