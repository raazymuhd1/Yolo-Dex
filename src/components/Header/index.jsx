import { CustomConnectBtn } from "../../components";
import Links from "../Links"
import { useSwapContext } from "../ContextApi"

const Header = () => {
     const {address, connectWallet} = useSwapContext()
    

  return (
    <header className="min-h-[100px] w-full sticky top-0 z-[9] bg-[var(--light-dark)] card_shadows border-b-[1px] border-b-secondary md:py-0 py-[5px]">
        <nav className="md:w-[90%] w-full h-full mx-auto flex lg:flex-row flex-col gap-[.7rem] items-center justify-between ">
            {/* <div className="flex md:flex-row flex-col w-[60%] md:justify-between items-center md:gap-[60px]"> */}
              <h2 className=" font-extrabold text-[var(--orange-bg)] text-[clamp(2rem,2vmax,2.4rem)]"> YoloSwap </h2>
              <Links />
            {/* </div>  */}
            {/* <Networks /> */}
            <CustomConnectBtn />
        </nav>
    </header>
  )
}

export default Header