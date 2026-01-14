import { useState } from 'react'
import { networkLists } from '../../constants'
import { MdKeyboardArrowDown, MdOutlineSearch, MdOutlineClose   } from "react-icons/md";
import {eth} from "../../assets"
import BridgeChains from "./BridgeChains"

const BridgeNetworks = () => {
    const [showNetworks, updateShowNetworks] = useState(false)
    const [selectedNetwork, setSelectedNetwork] = useState(networkLists[0])

  return (
    <div className="w-[25%]">
        <aside 
            onClick={() => updateShowNetworks(!showNetworks)}
            className="flex-row-center min-w-[150px] gap-[5px] border-[1px] border-[var(--orange-bg)] cursor-pointer py-[4px] bg-mainAlt rounded-[10px]">
            <img src={selectedNetwork?.logo} alt="network" className="w-[25px] h-[25px] rounded-[50%] object-cover" />
            <h3 className="font-bold text-[clamp(.7rem,1vmax,.9rem)] text-[#fff] uppercase"> {selectedNetwork?.name} </h3>
            <MdKeyboardArrowDown size={20} className="text-[#fff]" />
        </aside>
        
        <BridgeChains setSelectedNetwork={setSelectedNetwork} showChains={showNetworks} setShowChains={updateShowNetworks} />
    </div>
  )
}

export default BridgeNetworks