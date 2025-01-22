import { eth, bnb, op, arb } from "../assets"

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


export { networks }