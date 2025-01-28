import { Route, Routes } from 'react-router-dom'
// import {config} from "../config"
import "./App.css"
import { Header, Swap, TestSwap, Footer } from './components'
import { Bridge, Pool, Stake } from "./pages"
import SwapContextProvider from "./components/ContextApi"
import WalletProviders from "./components/WalletProviders"

const App = () => {
  return (
          <WalletProviders> 
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
          </WalletProviders>  
  )
}

export default App