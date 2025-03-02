import {useState, useEffect, useRef} from 'react'
import { useBalance, useAccount, useChainId } from 'wagmi'
import { useSwapContext } from '../ContextApi'
import { TokenAssets } from "../../components"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { weth } from "../../assets"
import { handlingTradeQuoting } from "../../utils/hooks"

const SwapCard = ({tokenToTrade, updateTokenTrade}) => {
    const inputAmtRef = useRef(null);
    const [showTokens, setShowTokens] = useState(false)
    const {quoteTrade, setQuoteTrade} = useSwapContext()
    const [inputAmount, updateInputAmount] = useState("0")
    const [selectedToken, setSelectedToken] = useState({
             name: "WETH",
             logo: weth,
             address: "",
             tokenDetails: null
          })
      const user = useAccount();
      const chainId = useChainId();
      const accountBalance = useBalance({ 
        address: user.address,
        token: selectedToken.address,
        chainId: chainId
      })

      console.log(accountBalance.data)

     useEffect(() => {
           const updatingTokenTrade = async() => {
               updateTokenTrade({ ...tokenToTrade, tokenIn: selectedToken?.address, amountInOrOut: inputAmount });
               setQuoteTrade({ ...quoteTrade, tokenIn: selectedToken?.tokenDetails, amountIn: inputAmount})

               await handlingTradeQuoting(quoteTrade.tokenIn, quoteTrade.tokenOut, quoteTrade.amountIn, "0x1F98431c8aD98523631AE4a59f267346ea31F984", "3000", "https://eth-mainnet.g.alchemy.com/v2/ebG2qNqkQ9BTV4EPazA-enTIlymdZaZ0");
           }

           updatingTokenTrade()
    }, [selectedToken, inputAmount])


    function handlingInputAmt(e) {
        const value = e.target.value;
        updateInputAmount(value);
        setQuoteTrade({ ...quoteTrade, isQuoted: true})
    }

    const handlingMaxAmount = () => {
       inputAmtRef.current.focus();
       inputAmtRef.current.value = Number(accountBalance.data?.value) || 0;
    }

  return (
    <>
      <div className="w-full flex flex-col gap-[10px] h-[20%] bg-secondary rounded-[10px] p-[10px]">

        <div className="flex items-center w-full justify-between p-[5px]"> 
            <h4 className="uppercase text-textWhite"> From </h4>
            {/* ${title.toLowerCase() == "from" ? "flex-row-center gap-[5px]" : "hidden"} */}
            <h3 className={`font-semibold text-textWhite text-[.8vmax]`}> Balance: <strong className="font-bold text-textWhite text-[.7vmax]"> { "0" || accountBalance.data?.value } </strong> </h3>
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
              ref={inputAmtRef} 
              value={inputAmount}
              onChange={(e) => handlingInputAmt(e)}
              placeholder="0" 
              className="w-[80%] h-full text-[30px] md:text-[40px] outline-none text-right placeholder:text-right text-[#fff] bg-transparent" />
        </div>

        {/* bottom section */}
        {/* ${title.toLowerCase() == "to" ? "justify-end" : "justify-between"} */}
        {/* ${title.toLowerCase() == "to" && "hidden"} */}
        <div className={`w-full flex items-center justify-between`}> 
            <h5 
              onClick={handlingMaxAmount}
              className={`cursor-pointer p-[5px] text-[14px] w-[40px] text-center bg-main text-secondaryAlt rounded-[15px] font-bold`}> Max </h5>
            <h5 className="font-bold text-textWhite"> $3,500 </h5>
        </div>


      </div>

      <TokenAssets setSelectedToken={setSelectedToken} showTokens={showTokens} setShowTokens={setShowTokens}  />
    </>
  )
}

export default SwapCard