import { eth, bnb, op, arb, weth, usdt, usdc, dai, doge, ava } from "../assets"
import { Token } from "@uniswap/sdk-core"

export const navlinks = [
    { id: 1, title: "Swap", url: "/" },
    { id: 2, title: "Pools", url: "/pool" },
    { id: 3, title: "Stake", url: "/stake" },
    { id: 4, title: "Bridge", url: "/bridge" },
]


const networkLists = [
    { id: 0, name: "Ethereum", chainId: 1, logo: eth },
    { id: 1, name: "Optimism", chainId: 1, logo: op },
    { id: 2, name: "BNB Chain", chainId: 1, logo: bnb },
    { id: 3, name: "Arbitrum", chainId: 1, logo: arb },
    { id: 4, name: "Avalanche", chainId: 1, logo: ava },
]


const handlingAvailableTokens = (chainId) => {
   return [
    { id: 0, name: "usdt", logo: usdt, address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", tokenDetails: new Token(chainId, "0xdAC17F958D2ee523a2206206994597C13D831ec7", 6, "USDT", "Tether USD" ) },
    { id: 1, name: "usdc", logo: usdc, address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", tokenDetails: new Token(chainId, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 6, "USDC", "") },
    { id: 2, name: "weth", logo: weth, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", tokenDetails: new Token(chainId, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "WETH", "Wrapped Ether") },
    { id: 3, name: "dai", logo: dai, address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", tokenDetails: new Token(chainId, "0x6B175474E89094C44Da98b954EedeAC495271d0F", 18, "DAI", "Dai") },
  ]
}



export { networkLists, handlingAvailableTokens }