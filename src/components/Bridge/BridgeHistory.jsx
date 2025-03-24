import React from 'react'

const BridgeHistory = ({ showHistory, setShowHistory }) => {
  return (
    <section className={`${!showHistory && "hidden"} absolute top-0 right-0 w-full h-screen`}>
        <div className="w-[60%] mx-auto">
          <h2> Transactions History </h2>
        </div>
    </section>
  )
}

export default BridgeHistory