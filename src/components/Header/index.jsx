import { CustomConnectBtn } from "../../components";
import Links from "../Links"
import { useSwapContext } from "../ContextApi"

const Header = () => {
     const {address, connectWallet} = useSwapContext()
    

  return (
    <header className="h-[100px] w-full sticky top-0 z-[9] bg-[var(--light-dark)] card_shadows border-b-[1px] border-b-secondary">
        <nav className="w-[90%] h-full mx-auto flex  items-center justify-between">
            {/* <div className="flex items-center gap-[60px]">
            </div> */}
            <h2 className=" font-extrabold text-[var(--orange-bg)] text-[clamp(1.2rem,2vmax,2rem)]"> PinkySwap </h2>
            <Links />
            {/* <Networks /> */}
            <CustomConnectBtn />
        </nav>
    </header>
  )
}

export default Header