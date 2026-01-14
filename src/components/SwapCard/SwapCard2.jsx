import {useState, useEffect, useRef} from 'react'
import { TokenAssets } from "../../components"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { weth } from "../../assets"
import { useSwapContext } from "../ContextApi"

const SwapCard2 = ({tokenToTrade, updateTokenTrade}) => {
    const [showTokens, setShowTokens] = useState(false)
    const [inputAmount, updateInputAmount] = useState("")
    const inputRef = useRef(null);
    const { quoteTrade } = useSwapContext()
      const [selectedToken, setSelectedToken] = useState({
             name: "WETH",
             logo: weth,
             address: ""
          })

     useEffect(() => {
           const updatingTokenTrade = () => {
              updateTokenTrade({ ...tokenToTrade, tokenOut: { name: selectedToken.name, logo: selectedToken.logo, amount: inputAmount }});
              

              //  make an input focus when user type the amountIn on the first input card
              if(quoteTrade.isQuoted) {
                  inputRef.current.value = "10"
                  console.log(inputRef.current)
              }
           }

           updatingTokenTrade()
      }, [selectedToken, quoteTrade])

    function handlingInputAmt(e) {
        const value = e.target.value;
        updateInputAmount(value);
    }

  return (
    <>
      <div className="w-full flex flex-col gap-[10px] h-[20%] rounded-[3rem] p-[5px] border-[1px] border-secondary">

        <div className="flex items-center w-full justify-between p-[5px]"> 
            <h4 className="uppercase font-bold text-[clamp(.8rem,1.3vmax,1.1rem)] text-textWhite"> To </h4>
        </div>

        {/* middle section */}
        <div className="w-full h-[80px] flex items-center gap-[10px]">
          {/* token lists */}
            <aside
              onClick={() => setShowTokens(true)} 
              className="w-[fit-content] border-[var(--orange-bg)] border-[1px] flex items-center gap-[8px] p-[8px] bg-main rounded-[10px]  cursor-pointer">
                <img src={selectedToken?.logo} alt="token-logo" className="h-[clamp(20px,30px,35px)] w-[clamp(20px,30px,35px)] rounded-[50%]" />
                <h4 className="text-[clamp(.8rem,1vmax,1rem)] font-bold text-[var(--white)] uppercase"> {selectedToken?.name} </h4>
                <MdOutlineKeyboardArrowDown className="text-[25px] md:text-[35px] text-[#fff]" />
            </aside>
            <input 
              ref={inputRef}
              value={inputAmount}
              onChange={handlingInputAmt}
              type="text" 
              placeholder="0" 
              className="w-[80%] h-full text-[clamp(1rem,1.5vmax,1.5rem)] md:text-[40px] outline-none text-right placeholder:text-right text-[#fff] bg-transparent" />
        </div>

        <div className={`w-full flex items-center justify-between`}> 
            <h5 className={`cursor-pointer p-[5px] w-[40px] text-center bg-main text-[clamp(.8rem,1.1vmax,1.1rem)] text-[var(--orange-bg)] rounded-[15px] font-bold`}> Max </h5>
            <h5 className="font-bold text-textWhite text-[clamp(.8rem,1vmax,1rem)]"> $3,500 </h5>
        </div>


      </div>

      <TokenAssets setSelectedToken={setSelectedToken} showTokens={showTokens} setShowTokens={setShowTokens}  />
    </>
  )
}

export default SwapCard2