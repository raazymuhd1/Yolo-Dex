import {useState, useEffect} from 'react'
import ERC20 from "../../utils/abis/ERC20.json"
import OkuSwap from "../../utils/abis/OkuSwap.json"
import {ethers} from "ethers"
import { useSwapContext } from "../ContextApi" 

const TestSwap = () => {
        const {address} = useSwapContext()
        const [maxInAmt, setMaxInAmt] = useState("")
        const [inputs, setInputs] = useState({
            tokenIn: "",
            tokenOut: "",
            amountIn: ""
        })

    // useEffect(() => {
    const exactInputSwap = async() => {
             const WETH = "0x4200000000000000000000000000000000000006";
             const WBTC = "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3";
             const USDT = "0x05D032ac25d322df992303dCa074EE7392C117b9";
             const USDCe = "0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0";
             const DAI = "0x6c851F501a3F24E29A8E39a29591cddf09369080";
             const okuSwapAddr = "0xD075b9531779E38487Af3C87F1D6a7362A37980D"
    
             const provider = new ethers.providers.Web3Provider(window.ethereum);
             const signer = provider.getSigner(address);
             const okuSwap = new ethers.Contract(okuSwapAddr, OkuSwap.abi, signer)
    
                 try {
                     const amtOut = await okuSwap.exactInput({tokenIn: inputs.tokenIn, tokenOut: inputs.tokenOut, amountIn: inputs.amountIn * 10**18}, { gasLimit: 3000000 })
                     console.log(inputs.amountIn*10**6)
                     console.log(amtOut)
                 } catch(err) {
                    console.log(err)
                 }
    
    
        }

    const exactOutputSwap = async() => {
             const WETH = "0x4200000000000000000000000000000000000006";
             const WBTC = "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3";
             const USDT = "0x05D032ac25d322df992303dCa074EE7392C117b9";
             const USDCe = "0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0";
             const DAI = "0x6c851F501a3F24E29A8E39a29591cddf09369080";
             const okuSwapAddr = "0xD075b9531779E38487Af3C87F1D6a7362A37980D"
    
             const provider = new ethers.providers.Web3Provider(window.ethereum);
             const signer = provider.getSigner(address);
             const okuSwap = new ethers.Contract(okuSwapAddr, OkuSwap.abi, signer)

                 try {
                     const amtOut = await okuSwap.exactOutput({tokenIn: inputs.tokenIn, tokenOut: inputs.tokenOut, amountOut: inputs.amountIn*10**8}, { gasLimit: 3000000 })
                     console.log(amtOut)
                     console.log(inputs)
                 } catch(err) {
                    console.log(err)
                 }
    
    
        }
    
    const quoteSwap = async() => {
        const okuSwapAddr = "0xD075b9531779E38487Af3C87F1D6a7362A37980D"
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(address);
        const latestSwap = new ethers.Contract(okuSwapAddr, OkuSwap.abi, signer)
        const res = await latestSwap.getSwapQuote(inputs.tokenIn, inputs.tokenOut, inputs.amountIn);

        console.log(res);

        latestSwap.on("Quoted", (amount) => {
              console.log(amount.toString());
              setMaxInAmt(amount)
        })
    }

    const approval = async() => {
         const okuSwapAddr = "0xD075b9531779E38487Af3C87F1D6a7362A37980D"

         const provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner(address);
         const erc20 = new ethers.Contract(inputs.tokenIn, ERC20.abi, signer);

         const isApproved = await erc20.approve(okuSwapAddr, inputs.amountIn*10**18);
         console.log(isApproved.hash)
    }


  return (
    <div className="p-[20px] w-[90%] mx-auto">
        <h2 className="text-center font-extrabold text-[35px]"> Test Swap </h2>

        <div className="flex flex-col gap-[20px]  mt-[70px] w-[40%] mx-auto"> 
            <input 
                value={inputs.tokenIn}
                onChange={(e) => setInputs({ ...inputs, tokenIn: e.target.value })}
                type="text" placeholder="token in address" className="p-[10px] border-[1px] rounded-[10px]" />
            <input 
                value={inputs.tokenOut}
                onChange={(e) => setInputs({ ...inputs, tokenOut: e.target.value })}
                type="text" placeholder="token Out address" className="p-[10px] border-[1px] rounded-[10px]" />
            <input 
                value={inputs.amountIn}
                onChange={(e) => setInputs({ ...inputs, amountIn: e.target.value })}
                type="text" placeholder="amount In" className="p-[10px] border-[1px] rounded-[10px]" />
            <div className="flex w-full items-center gap-[20px]">
                <aside className="w-[30%] flex flex-col gap-[10px]"> 
                    <button 
                    onClick={quoteSwap}
                    className="border-none w-full outline-none p-[10px] bg-main font-bold rounded-[10px]"> Quote </button>
                    <h4 className="w-full"> only call this for exactOutput swap </h4>
                </aside>
                <button 
                onClick={approval}
                className="border-none w-[50%] outline-none p-[10px] bg-main font-bold rounded-[10px]"> Approve </button>
                 <button 
                    onClick={exactInputSwap}
                    className="border-none w-[50%] outline-none p-[10px] bg-main font-bold rounded-[10px]"> Swap </button>  
            </div>
        </div>
    </div>
  )
}

export default TestSwap