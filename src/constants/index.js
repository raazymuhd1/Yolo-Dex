import { eth, bnb, op, arb, weth, usdt, usdc, dai, doge } from "../assets"

export const navlinks = [
    { id: 1, title: "Swap", url: "/" },
    { id: 2, title: "Pools", url: "/pool" },
    { id: 3, title: "Stake", url: "/stake" },
    { id: 4, title: "Bridge", url: "/bridge" },
]


const networks = [
    { id: 0, title: "ethereum", chainId: "0", logo: eth },
    { id: 1, title: "bsc", chainId: "0", logo: bnb },
    { id: 2, title: "optimism", chainId: "0", logo: op },
    { id: 3, title: "arbitrum", chainId: "0", logo: arb },
]

const tokens = [
  { id: 0, name: "usdt", logo: usdt },
  { id: 1, name: "usdc", logo: usdc },
  { id: 2, name: "weth", logo: weth },
  { id: 3, name: "dai", logo: dai },
  { id: 4, name: "doge", logo: doge },
]


export { networks, tokens }