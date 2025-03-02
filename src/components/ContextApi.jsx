import { createContext, useContext, useState } from "react"
import { weth } from "../assets";
import { handlingAvailableTokens } from "../constants";

const SwapContext =  createContext();

const SwapContextProvider = ({ children }) => {
      const [address, setAddress] = useState("")
      const [selectedToken, setSelectedToken] = useState({
         name: "WETH",
         logo: weth,
         address: ""
      })
      const [quoteTrade, setQuoteTrade] = useState({tokenIn: handlingAvailableTokens[0], tokenOut: handlingAvailableTokens[1], amountIn: "", isQuoted: false});

      console.log(quoteTrade)

    const connectWallet = async() => {
        if(typeof window != "undefined") {
            const { ethereum } = window;
            const addresses = await ethereum.request({ method: "eth_requestAccounts" })
            console.log(addresses)
            setAddress(addresses[0])
        }
    }

    return (
        <SwapContext.Provider value={{
            connectWallet,
            address,
            selectedToken,
            setSelectedToken,
            quoteTrade, setQuoteTrade
        }} >
            { children }
        </SwapContext.Provider>
    )
}

export default SwapContextProvider;

export const useSwapContext = () => useContext(SwapContext);