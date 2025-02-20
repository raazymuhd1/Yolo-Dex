import { useState } from 'react'

const SwapInfo = () => {
      const [detail, setDetail] = useState({
          "Rate": "1 ETH = 3,200 USDT",
          "Route": "WETH > USDT",
          "Minimum Received": "17 USDT",
          "Trading Fee": "0.00000 ETH",
          "Slippage Tolerance": "0.5%"
      })

      const handleDetails = (title, value) => {
          return <div className="w-full flex-row-center justify-between"> 
            <p className="swap_info_title"> {title} </p>
            <h3 className="swap_info_value"> { value } </h3>
        </div>
      }

  return (
    <section className="flex flex-col gap-[10px] min-h-[180px] w-full p-[15px] rounded-[10px] bg-secondary text-[#fff]">
        { handleDetails("Rate", "1 ETH = 3,200 USDT") }
        { handleDetails("Route", "WETH > USDT") }
        { handleDetails("Minimum Received", "17 USDT") }
        { handleDetails("Trading Fee", "0.00000 ETH") }
        { handleDetails("Slippage Tolerance", "0.5%") }
    </section>
  )
}

export default SwapInfo