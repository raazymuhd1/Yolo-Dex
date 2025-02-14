import { useState } from 'react'
import {eth} from '../../assets'
import { networks } from "../../constants"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const Networks = () => {
        const [showNetworks, setShowNetworks] = useState(false)

  return (
    <section className="flex w-[150px] flex-col">
        <aside
            onMouseEnter={() => setShowNetworks(true)}  
            className="flex w-full relative top-0 p-[8px] bg-main items-center gap-[10px] cursor-pointer rounded-[10px]"> 
                <img src={eth} alt="chain-logo" className="w-[30px] h-[30px] rounded-[50%]" />
                <h4> ethereum </h4>
                <MdOutlineKeyboardArrowDown className="text-[18px] md:text-[24px]" />
        </aside>
        <aside
            className={`${showNetworks ? "translate-y-[0px] opacity-1" : "translate-y-[100px] opacity-0"} w-[150px] min-h-[fit-content] flex flex-col-center absolute top-[70px] transition-all duration-500 rounded-[10px] bg-main p-[10px]`}>
            { networks.map(network => (
                <aside
                    onClick={() => setShowNetworks(false)} 
                    key={network.id} 
                    className={` w-full flex items-center justify-start gap-[10px] p-[8px] cursor-pointer bg-main`}>
                    <img src={network.logo} alt="network-logo" className="w-[25px] h-[25px] rounded-[50%]" />
                    <h4 className=""> {network.title} </h4>
                </aside>
            )) }
        </aside>
    </section>
  )
}

export default Networks