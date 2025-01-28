import { useState } from 'react'

const SwapInfo = () => {
      const [detail, setDetail] = useState({
          "Rate": "1 ETH = 3,200 USDT",
          "Route": "WETH > USDT",
          "Minimum Received": "17 USDT",
          "Trading Fee": "0.00000 ETH",
          "Slippage Tolerance": "0.5%"
      })

  return (
    <section className="flex flex-col gap-[10px] min-h-[180px] w-full p-[15px] rounded-[10px] main-theme text-[#fff]">
        <div className="w-full flex-row-center justify-between"> 
            <p className="swap_info_title"> Rate </p>
            <h3 className="swap_info_value"> 1 ETH = 3,200 USDT </h3>
        </div>
        <div className="w-full flex-row-center justify-between"> 
            <p className="swap_info_title"> Route </p>
            <h3 className="swap_info_value"> WETH {">"} USDT" </h3>
        </div>
        <div className="w-full flex-row-center justify-between"> 
            <p className="swap_info_title"> Minimum Received </p>
            <h3 className="swap_info_value"> 17 USDT </h3>
        </div>
        <div className="w-full flex-row-center justify-between"> 
            <p className="swap_info_title"> Trading Fee </p>
            <h3 className="swap_info_value"> 0.00000 ETH </h3>
        </div>
        <div className="w-full flex-row-center justify-between"> 
            <p className="swap_info_title"> Slippage Tolerance </p>
            <h3 className="swap_info_value"> 0.5% </h3>
        </div>
    </section>
  )
}

export default SwapInfo