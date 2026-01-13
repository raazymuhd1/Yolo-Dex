import {useState, useEffect, useRef} from 'react'
import { ethers } from 'ethers'
import { useBalance, useAccount, useChainId, useReadContract } from 'wagmi'
import { erc20Abi } from 'viem'
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
      const tokenDecimals = useReadContract({
          abi: erc20Abi,
          address: selectedToken.address,
          functionName: "decimals"
      })
      const user = useAccount();
      const chainId = useChainId();
      const accountBalance = useBalance({ 
        address: user.address,
        token: selectedToken.address,
        chainId: chainId
      })

     useEffect(() => {
           const updatingTokenTrade = async() => {
               updateTokenTrade({ ...tokenToTrade, tokenIn: { name: selectedToken.name, logo: selectedToken.logo, amount: inputAmount, address: selectedToken.address }});
               setQuoteTrade({ ...quoteTrade, tokenIn: selectedToken?.tokenDetails, amountIn: tokenDecimals.data == 6 ? inputAmount * 1e6 : tokenDecimals.data == 8 ? inputAmount : tokenDecimals.data == 18 ? inputAmount : inputAmount})
             
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
      <div className="w-full flex flex-col gap-[5px] rounded-[3rem] p-[5px] border-[1px] border-secondary">

        <div className="flex items-center w-full justify-between p-[5px]"> 
            <h4 className="uppercase text-textWhite font-bold text-[clamp(.8rem,1.3vmax,1.1rem)]"> From </h4>
            {/* ${title.toLowerCase() == "from" ? "flex-row-center gap-[5px]" : "hidden"} */}
            <h3 className={`font-semibold text-[var(--grey)] text-[.7vmax]`}> Balance: <strong className="font-bold text-textWhite text-[.9vmax]"> { "0" || accountBalance.data?.value } </strong> </h3>
        </div>

        {/* middle section */}
        <div className="w-full h-[80px] flex items-center gap-[10px]">
          {/* token lists */}
            <aside
              onClick={() => setShowTokens(true)} 
              className="w-[fit-content] border-[var(--orange-bg)] border-[1px] flex items-center gap-[8px] p-[6px] bg-main rounded-[10px]  cursor-pointer">
                <img src={selectedToken?.logo} alt="token-logo" className="h-[35px] w-[35px] rounded-[50%]" />
                <h4 className="text-[.9vmax] font-bold text-[#fff] uppercase"> {selectedToken?.name} </h4>
                <MdOutlineKeyboardArrowDown className="text-[2vmax] text-[#fff]" />
            </aside>
            <input 
              type="text"
              ref={inputAmtRef} 
              value={inputAmount}
              onChange={(e) => handlingInputAmt(e)}
              placeholder="0" 
              className="w-[80%] h-fulld outline-none text-right placeholder:text-right text-[#fff] bg-transparent placeholder:text-[2vmax] text-[2vmax]" />
        </div>

        {/* bottom section */}
        {/* ${title.toLowerCase() == "to" ? "justify-end" : "justify-between"} */}
        {/* ${title.toLowerCase() == "to" && "hidden"} */}
        <div className={`w-full flex items-center justify-between`}> 
            <h5 
              onClick={handlingMaxAmount}
              className={`cursor-pointer p-[5px] text-[.7vmax] w-[40px] text-center bg-main text-secondaryAlt rounded-[15px] font-bold`}> Max </h5>
            <h5 className="font-bold text-[var(--white)] text-[.8vmax]"> $3,500 </h5>
        </div>


      </div>

      <TokenAssets setSelectedToken={setSelectedToken} showTokens={showTokens} setShowTokens={setShowTokens}  />
    </>
  )
}

export default SwapCard