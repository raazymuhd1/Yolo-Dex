import { Route, Routes } from 'react-router-dom'
import { Header, Swap, TestSwap, Footer } from './components'
import SwapContextProvider from "./components/ContextApi"

const App = () => {
  return (
    <SwapContextProvider>
       <Header />
       <Routes>
          <Route path='/' element={<Swap />} />
          <Route path='/test-swap' element={<TestSwap />} />
       </Routes>
       <Footer />
    </SwapContextProvider>
  )
}

export default App