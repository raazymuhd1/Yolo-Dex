import { eth, bnb, op, arb, weth, usdt, usdc, dai, doge, ava } from "../assets"

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

const tokens = [
  { id: 0, name: "usdt", logo: usdt },
  { id: 1, name: "usdc", logo: usdc },
  { id: 2, name: "weth", logo: weth },
  { id: 3, name: "dai", logo: dai },
  { id: 4, name: "doge", logo: doge },
]


export { networkLists, tokens }