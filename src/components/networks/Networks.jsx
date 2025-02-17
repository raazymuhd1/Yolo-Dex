import {useState} from 'react'
import { eth } from '../../assets'
import NetworkLists from "./NetworkLists"

const Networks = () => {
    const [showChains, setShowChains] = useState({
       visible: false,
       name: "Ethereum",
       chainId: 1,
       logo: eth
    });

    console.log(showChains)

  return (
    <div className={`relative top-0`}>
       <div 
        onClick={() => setShowChains({ ...showChains, visible: !showChains.visible })}
        className="flex items-center justify-center gap-[10px] cursor-pointer w-[fit-content] bg-secondary p-[5px] rounded-[10px]">
          <img src={showChains?.logo} alt="network" className="w-[30px] h-[30px] rounded-[50%]" />
          <h4 className="font-semibold text-textWhite text-[.8vmax] uppercase whitespace-nowrap"> {showChains.name} </h4>
       </div>

       <NetworkLists showChains={showChains} setShowChains={setShowChains} />
    </div>
  )
}

export default Networks

// import { useState } from 'react'
// import {eth} from '../../assets'
// import { networks } from "../../constants"
// import { MdOutlineKeyboardArrowDown } from "react-icons/md"

// const Networks = () => {
//         const [showNetworks, setShowNetworks] = useState(false)

//   return (
//     <section className="flex w-[150px] h-full flex-col">
//         <aside
//             onMouseEnter={() => setShowNetworks(true)}  
//             className="flex w-full p-[8px] bg-main items-center gap-[10px] cursor-pointer rounded-[10px]"> 
//                 <img src={eth} alt="chain-logo" className="w-[25px] h-[25px] rounded-[50%]" />
//                 <h4 className="text-textWhite font-semibold text-[.9vmax]"> ethereum </h4>
//                 <MdOutlineKeyboardArrowDown className="text-[18px] md:text-[24px]" />
//         </aside>
//         <aside
//             className={`${showNetworks ? "translate-y-[40px] opacity-1" : "translate-y-[100px] opacity-0"} w-[150px] h-[180px] overflow-y-auto flex flex-col-center absolute transition-all duration-500 rounded-[10px] bg-main p-[10px]`}>
//             { networks.map(network => (
//                 <aside
//                     onClick={() => setShowNetworks(false)} 
//                     key={network.id} 
//                     className={` w-full flex items-center justify-start gap-[10px] p-[8px] cursor-pointer   bg-main hover:bg-textOrange hover:text-secondaryAlt transition-all duration-500 rounded-[8px]`}>
//                     <img src={network.logo} alt="network-logo" className="w-[25px] h-[25px] rounded-[50%]" />
//                     <h4 className="text-textWhite"> {network.title} </h4>
                    
//                 </aside>
//             )) }
//         </aside>
//     </section>
//   )
// }

// export default Networks