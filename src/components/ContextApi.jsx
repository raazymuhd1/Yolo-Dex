import { createContext, useContext, useState } from "react"
import { weth } from "../assets";
import { handlingAvailableTokens } from "../constants";

const SwapContext =  createContext();

const SwapContextProvider = ({ children }) => {
      const [selectedToken, setSelectedToken] = useState({
         name: "WETH",
         logo: weth,
         address: ""
      })
      const [quoteTrade, setQuoteTrade] = useState({tokenIn: handlingAvailableTokens[0], tokenOut: handlingAvailableTokens[1], amountIn: "", amountOut: "", isQuoted: false});

      console.log(quoteTrade)

    return (
        <SwapContext.Provider value={{
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