import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Networks, CustomConnectBtn } from "../../components";
import Links from "../Links"
import { MdNotificationsNone, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSwapContext } from "../ContextApi"
import { eth } from "../../assets"

const Header = () => {
     const {address, connectWallet} = useSwapContext()
    

  return (
    <header className="h-[100px] w-full sticky top-0 z-[9] bg-mainAlt border-b-[1px]">
        <nav className="w-[90%] h-full mx-auto flex items-center justify-between">
            <div className="flex items-center gap-[60px]">
                <h2 className=" md:text-[25px] lg:text-[35px] font-bold text-textWhite text-[16px]"> PinkySwap </h2>
                <Links />
            </div>
            {/* <Networks /> */}
            <CustomConnectBtn />
        </nav>
    </header>
  )
}

export default Header