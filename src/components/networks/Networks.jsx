import { useState } from 'react'
import {eth} from '../../assets'
import { networks } from "../../constants"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const Networks = () => {
        const [showNetworks, setShowNetworks] = useState(false)

  return (
    <section className="flex relative top-0 w-[150px] flex-col">
        <aside
            onMouseEnter={() => setShowNetworks(true)}  
            className="flex w-full p-[8px] bg-main items-center gap-[10px] cursor-pointer rounded-[10px]"> 
                <img src={eth} alt="chain-logo" className="w-[30px] h-[30px] rounded-[50%]" />
                <h4> ethereum </h4>
                <MdOutlineKeyboardArrowDown className="text-[18px] md:text-[24px]" />
        </aside>
        <aside
            className={`w-full flex flex-col-center overflow-y-auto transition-all duration-500 absolute top-[50px] h-[130px] rounded-[10px]`}>
            { networks.map(network => (
                <aside
                    onClick={() => setShowNetworks(false)} 
                    key={network.id} 
                    className={`${showNetworks ? "flex" : "hidden"} w-full items-center justify-start gap-[10px] p-[8px] cursor-pointer bg-main`}>
                    <img src={network.logo} alt="network-logo" className="w-[25px] h-[25px] rounded-[50%]" />
                    <h4 className=""> {network.title} </h4>
                </aside>
            )) }
        </aside>
    </section>
  )
}

export default Networks