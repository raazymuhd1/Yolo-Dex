import React from 'react'
import { weth, usdt, usdc, dai, doge } from "../../assets";
import { MdArrowBack, MdSearch  } from "react-icons/md";

const TokenAssets = () => {
  return (
    <section className="w-full h-full absolute top-0 flex flex-col gap-[10px]">
       <aside className="flex-row-center gap-[10px]">
         <MdArrowBack className="" />
         <h4> Select token </h4>
       </aside>

       <div className="flex items-center gap-[10px] p-[10px] rounded-[10px]">
          <input type="text" placeholder="Search token" className="w-[90%] h-full" />
          <MdSearch  className="w-[10%]" />
       </div>
    </section>
  )
}

export default TokenAssets