import {useState, useEffect} from 'react'
import { TokenAssets } from "../../components"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { weth } from "../../assets"


const SwapCard2 = ({tokenToTrade, updateTokenTrade}) => {
    const [showTokens, setShowTokens] = useState(false)
      const [selectedToken, setSelectedToken] = useState({
             name: "WETH",
             logo: weth,
             address: ""
          })

     useEffect(() => {
           const updatingTokenTrade = () => {
               updateTokenTrade({ ...tokenToTrade, tokenOut: selectedToken?.address })
           }

           updatingTokenTrade()
      }, [selectedToken])

  return (
    <>
      <div className="w-full flex flex-col gap-[10px] h-[20%] bg-secondary rounded-[10px] p-[10px]">

        <div className="flex items-center w-full justify-between p-[5px]"> 
            <h4 className="uppercase text-textWhite"> To </h4>
            {/* <h3 className={`${title.toLowerCase() == "from" ? "flex-row-center gap-[5px]" : "hidden"} font-semibold text-textWhite text-[.8vmax]`}> Balance: <strong className="font-bold text-textWhite text-[.7vmax]"> 0 </strong> </h3> */}
        </div>

        {/* middle section */}
        <div className="w-full h-[80px] flex items-center gap-[10px]">
          {/* token lists */}
            <aside
              onClick={() => setShowTokens(true)} 
              className="w-[30%] border-secondaryAlt border-[1px] flex items-center gap-[8px] p-[8px] bg-main rounded-[10px]  cursor-pointer">
                <img src={selectedToken?.logo} alt="token-logo" className="h-[35px] w-[35px] rounded-[50%]" />
                <h4 className="text-[.9vmax] text-[#fff] uppercase"> {selectedToken?.name} </h4>
                <MdOutlineKeyboardArrowDown className="text-[25px] md:text-[35px] text-[#fff]" />
            </aside>
            <input 
              type="text" 
              placeholder="0" 
              className="w-[80%] h-full text-[30px] md:text-[40px] outline-none text-right placeholder:text-right text-[#fff] bg-transparent" />
        </div>

        {/* bottom section */}
         {/* ${title.toLowerCase() == "to" ? "justify-end" : "justify-between"} */}
        {/* ${title.toLowerCase() == "to" && "hidden"} */}
        <div className={`w-full flex items-center justify-between`}> 
            <h5 className={`cursor-pointer p-[5px] text-[14px] w-[40px] text-center bg-main text-secondaryAlt rounded-[15px] font-bold`}> Max </h5>
            <h5 className="font-bold text-textWhite"> $3,500 </h5>
        </div>


      </div>

      <TokenAssets setSelectedToken={setSelectedToken} showTokens={showTokens} setShowTokens={setShowTokens}  />
    </>
  )
}

export default SwapCard2