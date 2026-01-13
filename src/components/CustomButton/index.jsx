import React from 'react'

const CustomButton = ({title, handleClick, styles, isDisabled}) => {
  return (
    <button 
        disabled={isDisabled}
        onClick={handleClick} 
        className={`${styles} border-none outline-none py-[6px] px-[15px] rounded-[10px] font-bold transition-all duration-500 ${isDisabled ? "cursor-not-allowed" : "cursor-pointer hover:opacity-[0.8]" } `}>
        {title}
    </button>
  )
}

export default CustomButton