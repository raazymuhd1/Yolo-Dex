import { CustomConnectBtn } from "../../components";
import Links from "../Links"
import { useSwapContext } from "../ContextApi"

const Header = () => {
     const {address, connectWallet} = useSwapContext()
    

  return (
    <header className="h-[100px] w-full sticky top-0 z-[9] dark_glass_bg border-b-[1px] border-b-secondary">
        <nav className="w-[90%] h-full mx-auto flex  items-center justify-between">
            <div className="flex items-center gap-[60px]">
                <h2 className=" font-bold text-textWhite text-[2vmax]"> PinkySwap </h2>
                <Links />
            </div>
            {/* <Networks /> */}
            <CustomConnectBtn />
        </nav>
    </header>
  )
}

export default Header