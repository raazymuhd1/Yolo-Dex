import { Route, Routes } from 'react-router-dom'
import { Header, Swap } from './components'

const App = () => {
  return (
    <main>
       <Header />
       <Routes>
          <Route path='/' element={<Swap />} />
       </Routes>
    </main>
  )
}

export default App