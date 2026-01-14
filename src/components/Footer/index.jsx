import React from 'react'

const Footer = () => {
  return (
    <footer className="w-[90%] mt-[130px] h-[60px] bg-[var(--light-dark)] flex justify-between p-[15px] rounded-[10px] mx-auto relative bottom-0 border-t-[1px] border-t-secondary">
         <h2 className="font-bold text-[var(--orange-bg)] text-[16px] md:text-[20px] lg:text-[24px]"> YoloSwap </h2>
         <h4 className="font-medium text-[var(--grey)]"> @copyrights <strong> YoloSwap </strong> | 2025 </h4>
    </footer>
  )
}

export default Footer