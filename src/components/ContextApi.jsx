import { createContext, useContext, useState } from "react"

const SwapContext =  createContext();

const SwapContextProvider = ({ children }) => {
      const [address, setAddress] = useState("")

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
            address
        }} >
            { children }
        </SwapContext.Provider>
    )
}

export default SwapContextProvider;

export const useSwapContext = () => useContext(SwapContext);