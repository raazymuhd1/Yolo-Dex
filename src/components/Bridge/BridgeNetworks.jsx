import { useState } from 'react'
import { networkLists } from '../../constants'
import { MdKeyboardArrowDown, MdOutlineSearch, MdOutlineClose   } from "react-icons/md";
import {eth} from "../../assets"
import BridgeChains from "./BridgeChains"

const BridgeNetworks = () => {
    const [showNetworks, updateShowNetworks] = useState(false)

  return (
    <div className="w-[25%]">
        <aside 
            onClick={() => updateShowNetworks(!showNetworks)}
            className="flex-row-center w-[fit-content] border-[1px] border-secondaryAlt cursor-pointer py-[4px] bg-mainAlt rounded-[10px]">
            <img src={eth} alt="network" className="w-[25px] h-[25px] rounded-[50%] object-cover" />
            <h3 className="font-bold text-[.7vmax] text-[#fff] uppercase"> Ethereum </h3>
            <MdKeyboardArrowDown size={20} className="text-[#fff]" />
        </aside>
        
        <BridgeChains showChains={showNetworks} setShowChains={updateShowNetworks} />
    </div>
  )
}

export default BridgeNetworks