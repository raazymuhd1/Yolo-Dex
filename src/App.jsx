import { Route, Routes } from 'react-router-dom'
import { WagmiProvider } from 'wagmi'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
// import {config} from "../config"
import { Header, Swap, TestSwap, Footer } from './components'
import { Bridge, Pool, Stake } from "./pages"
import SwapContextProvider from "./components/ContextApi"

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}> 
       <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <SwapContextProvider>
              <Header />
              <Routes>
                  <Route path='/' element={<Swap />} />
                  <Route path='/test-swap' element={<TestSwap />} />
                  <Route path='/bridge' element={<Bridge />} />
                  <Route path='/stake' element={<Stake />} />
                  <Route path='/pool' element={<Pool />} />
              </Routes>
              <Footer />
            </SwapContextProvider>
          </RainbowKitProvider>
       </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App