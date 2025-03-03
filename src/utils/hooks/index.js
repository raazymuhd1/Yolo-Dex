import { computePoolAddress } from '@uniswap/v3-sdk' 
import { ethers } from 'ethers'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'

// import { AlphaRouter } from '@uniswap/smart-order-router';
// import { createPublicClient, http } from 'viem';
// import { mainnet } from 'viem/chains';
// import { CurrencyAmount, TradeType, Percent } from '@uniswap/sdk-core'
// #TODO: adding more details about the tokens, like, name, address, decimals, etc

export const handlingTradeQuoting = async(tokenIn, tokenOut, amount, recipient, poolFactoryAddr, poolFee, rpcUrl) => {

    // const client = createPublicClient({
    // chain: mainnet,
    // transport: http(rpcUrl),
    //     });
    // const router = new AlphaRouter({ chainId: 1, provider: client })
    // const inputAmount = CurrencyAmount.fromRawAmount(tokenIn, amount);
    // const route = await router.route(
    //     inputAmount,
    //     tokenOut,
    //     TradeType.EXACT_INPUT, // Swapping exact input amount
    //     {
    //         recipient,
    //         slippageTolerance: new Percent(5, 100), // 5% slippage
    //         deadline: Math.floor(Date.now() / 1000) + 60 * 10, // 10-minute deadline
    //     }
    // );

    // if (!route) {
    //     console.log("No route found");
    //     return;
    // }

    // console.log(`Expected Output: ${route.quote.toExact()} ${tokenOut.symbol}`);
    // console.log(`Gas Used: ${route.estimatedGasUsed.toString()}`);

    // -------------------------------- uses uniswap v3 sdk --------------------------------

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