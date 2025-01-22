import React from 'react'
import {eth} from '../../assets'
import { networks } from "../../constants"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const Networks = () => {
  return (
    <section className="flex relative top-0 w-[150px] flex-col">
        <aside className="flex w-full p-[8px] bg-main items-center gap-[10px] cursor-pointer rounded-[10px]"> 
                <img src={eth} alt="chain-logo" className="w-[30px] h-[30px] rounded-[50%]" />
                <h4> ethereum </h4>
                <MdOutlineKeyboardArrowDown className="text-[18px] md:text-[24px]" />
        </aside>
        <aside className={`w-full flex-col-center absolute rounded-[10px] main-theme flex`}>
            { networks.map(network => (
                <aside key={network.id} className="flex w-full items-center justify-start gap-[10px] p-[8px]">
                    <img src={network.logo} alt="network-logo" className="w-[25px] h-[25px] rounded-[50%]" />
                    <h4 className=""> {network.title} </h4>
                </aside>
            )) }
        </aside>
    </section>
  )
}

export default Networks