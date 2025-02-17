import BridgeNetworks from "./BridgeNetworks"

const BridgeCard = ({title}) => {

  return (
    <div className={`flex flex-col gap-[15px] h-[40%] w-full p-[15px] bg-secondary rounded-[10px]`}>
        <div className='flex w-full justify-between'>
            <h4 className='font-bold text-textWhite'> {title} </h4>
            <h5 className={` ${title.toLowerCase() == "to" && "hidden"} text-textWhite `}> Balance: 0 <strong className='font-bold cursor-pointer'> Max </strong> </h5>
        </div>
        <div className="flex-row-center justify-between w-full">
            {/* networks */}
            <BridgeNetworks />
            {/* input */}
            <input 
               type="text" 
              className='w-[70%] placeholder:text-right placeholder:font-bold outline-none h-full border-none p-[10px] bg-transparent text-[#fff] text-right placeholder:text-[25px] text-[25px]' 
              placeholder='0-10' />
        </div>
    </div>
  )
}

export default BridgeCard