import CustomButton from "../CustomButton"
import Links from "../Links"

const Header = () => {
    
    const connectWallet = async() => {
        if(typeof window != "undefined") {
            const { ethereum } = window;
            ethereum.request({ method: "eth_requestAccounts" })
        }
    }

  return (
    <header className="h-[100px] w-full">
        <nav className="w-[90%] h-full mx-auto flex items-center justify-between">
            <div className="flex items-center gap-[30px]">
                <h2 className=" md:text-[25px] font-bold text-[#352929] text-[16px]"> YoloSwap </h2>
                <Links />
            </div>
            <div>
                {/* chainlist */}
                <CustomButton handleClick={connectWallet} title="Connect Wallet" styles="bg-[#cd85af] text-[#eb0e8f] btn_trans" />
            </div>
        </nav>
    </header>
  )
}

export default Header