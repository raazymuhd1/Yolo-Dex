import React from 'react'
import { networkLists } from '../../constants'

const NetworkLists = ({showChains, setShowChains}) => {
  return (
    <section className={`${showChains.visible ? "flex-row-center opacity-[1] top-[50px] absolute" : "hidden opacity-0 top-[0px]"} w-[300px] gap-x-[5px] p-[10px] bg-secondary radius min-h-[100px] transition-all duration-500 flex-wrap
    rounded-[10px]
    `}>
        { networkLists.map(network => (
            <div 
              onClick={() => setShowChains({ visible: false, name: network.name, chainId: network.chainId, logo: network.logo })}
              key={network.id} className="flex-row-center py-[3px] px-[5px] gap-[10px] hover:bg-secondaryAlt p-[10px] radius cursor-pointer w-[45%] rounded-[10px]">
                <img src={network.logo} alt="chain-logo" className="w-[30px] h-[30px] rounded-[50%] object-cover" />
                <h4 className='font-bold text-[.8vmax] hover:text-textOrange
                 text-textWhite whitespace-nowrap'> {network.name} </h4>
            </div>
        )) }
    </section>
  )
}

export default NetworkLists