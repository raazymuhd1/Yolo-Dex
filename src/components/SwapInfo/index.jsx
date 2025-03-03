import { useState } from 'react'

const SwapInfo = ({tokenToTrade}) => {
       const {tokenIn, tokenOut} = tokenToTrade;

      const handleDetails = (title, value) => {
          return <div className="w-full flex-row-center justify-between"> 
            <p className="swap_info_title"> {title} </p>
            <h3 className="swap_info_value uppercase"> { value } </h3>
        </div>
      }

  return (
    <section className="flex flex-col gap-[2px] min-h-[120px] w-full p-[15px] rounded-[10px] bg-secondary text-[#fff]">
        { handleDetails("Rate", `${tokenIn.amount} ${tokenIn.name} = ${tokenOut.amount} ${tokenOut.name}`) }
        { handleDetails("Route", `${tokenIn.name} > ${tokenOut.name}`) }
        { handleDetails("Minimum Received", "17 USDT") }
        { handleDetails("Trading Fee", "0.00000 ETH") }
        { handleDetails("Slippage Tolerance", "0.5%") }
    </section>
  )
}

export default SwapInfo