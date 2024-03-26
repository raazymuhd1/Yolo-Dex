import React from 'react'

const CustomButton = ({title, handleClick, styles}) => {
  return (
    <button onClick={handleClick} className={`${styles} border-none outline-none py-[5px] px-[10px] rounded-[10px] font-bold hover:opacity-[0.8] transition-all duration-500 `}>
        {title}
    </button>
  )
}

export default CustomButton