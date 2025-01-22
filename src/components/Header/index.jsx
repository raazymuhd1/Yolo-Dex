import CustomButton from "../CustomButton"
import Links from "../Links"
import { MdNotificationsNone, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSwapContext } from "../ContextApi"
import { eth } from "../../assets"

const Header = () => {
     const {address, connectWallet} = useSwapContext()
    

  return (
    <header className="h-[100px] w-full">
        <nav className="w-[90%] h-full mx-auto flex items-center justify-between">
            <div className="flex items-center gap-[60px]">
                <h2 className=" md:text-[25px] lg:text-[35px] font-bold text-[#0a0909] text-[16px]"> PinkySwap </h2>
                <Links />
            </div>
            <div className="flex items-center gap-[20px]">
                {/* chainlist */}
                <div className="flex items-center py-[4px] px-[10px] bg-main rounded-[15px] gap-[5px] cursor-pointer"> 
                    <img src={eth} alt="network-icons" className="w-[35px] h-[35px] rounded-[50%]" />
                    <MdOutlineKeyboardArrowDown className="text-secondary text-[20px] font-bold" />
                </div>
                <CustomButton handleClick={connectWallet} title={`${address.length > 0 ? `${address}` : "Connect Wallet"}`} styles="bg-[#cd85af] text-secondary btn_trans" />
            </div>
        </nav>
    </header>
  )
}

export default Header