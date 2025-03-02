import { computePoolAddress } from '@uniswap/v3-sdk' 
import { ethers } from 'ethers'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'

// #TODO: adding more details about the tokens, like, name, address, decimals, etc

export const handlingTradeQuoting = async(tokenIn, tokenOut, amount, poolFactoryAddr, poolFee, rpcUrl) => {

    const CurrentConfig = {
        rpc: {
            // local: 'http://localhost:8545',
            mainnet: rpcUrl,
        },
        tokens: {
            in: tokenIn,
            amountIn: amount,
            out: tokenOut,
            poolFee: poolFee,
        },
    }

    const currentPoolAddress = computePoolAddress({
        factoryAddress: poolFactoryAddr,
        tokenA: CurrentConfig.tokens.in,
        tokenB: CurrentConfig.tokens.out,
        fee: CurrentConfig.tokens.poolFee,
    })

    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
    const currentPoolContract = new ethers.Contract(
        currentPoolAddress,
        IUniswapV3PoolABI.abi,
        provider
    )

    const [token0, token1, fee, liquidity, slot0] = await Promise.all([
        currentPoolContract.token0(),
        currentPoolContract.token1(),
        currentPoolContract.fee(),
        currentPoolContract.liquidity(),
        currentPoolContract.slot0(),
    ])
    const quoterContract = new ethers.Contract(
        QUOTER_CONTRACT_ADDRESS,
        Quoter.abi,
        provider
    )

    

    const quotedAmountOut = await quoterContract.callStatic.quoteExactInput(
        token0,
        token1,
        fee,
        fromReadableAmount(
            CurrentConfig.tokens.amountIn,
            CurrentConfig.tokens.in.decimals
        ).toString(),
        0
    )

    console.log(quotedAmountOut)
}