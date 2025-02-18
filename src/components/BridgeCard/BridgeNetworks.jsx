import { useState } from 'react'
import { networkLists } from '../../constants'
import { MdKeyboardArrowDown, MdOutlineSearch, MdOutlineClose   } from "react-icons/md";
import ether from "../../assets/images/eth.png"

const BridgeNetworks = () => {
    const [showNetworks, updateShowNetworks] = useState(false)

  return (
    <div className="w-[25%]">
        <aside 
            onClick={() => updateShowNetworks(!showNetworks)}
            className="flex-row-center w-full cursor-pointer py-[4px] bg-mainAlt rounded-[10px]">
            <img src={ether} alt="network" className="w-[30px] h-[30px] rounded-[50%] object-cover" />
            <h3 className="font-semibold text-[.8vmax] text-[#fff] uppercase"> Ethereum </h3>
            <MdKeyboardArrowDown size={20} className="text-[#fff]" />
        </aside>

        <div className={`${showNetworks ? "block opacity-1" : "hidden opacity-0"} fixed h-screen w-screen bg-[red] inset-0`}>
           <div className="h-full w-full" />

            <div className="absolute w-[40%] mx-auto h-[60%] top-[100px]">
                <div className="w-full flex-row-center justify-between">
                    <h3 className="text-[1vmax] font-bold"> Select Chain </h3>
                    <MdOutlineClose 
                         onClick={() => updateShowNetworks(false)}
                         size={20} />
                </div>
                <div className="flex-row-center gap-[10px]">
                    <MdOutlineSearch size={20} className="w-[10%]" />
                    <input type="text" placeholder='Search Network' className="border-[1px] h-full w-[90%] outline-none" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BridgeNetworks