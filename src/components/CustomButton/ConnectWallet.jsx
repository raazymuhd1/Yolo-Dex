import { ConnectButton } from '@rainbow-me/rainbowkit';


const CustomConnectBtn = () => {

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
     
        const connected = mounted && account && chain
         
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              const btnStyles = `text-textWhite font-semibold text-[.8vmax] bg-secondaryAlt py-[8px] px-[10px] rounded-[8px]`

              if (!connected) {
                return (
                  <button 
                    className="text-textOrange font-semibold text-[.8vmax] bg-secondaryAlt py-[8px] w-[150px] px-[10px] rounded-[8px]"
                    onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button 
                    className="text-textOrange font-semibold text-[.8vmax] bg-secondaryAlt py-[8px] px-[10px] rounded-[8px]"
                    onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex gap-[12px]">
                  <button
                    onClick={openChainModal}
                   className='flex items-center text-textOrange font-semibold text-[.8vmax] bg-secondaryAlt py-[8px] px-[10px] rounded-[8px] uppercase'
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        className={`bg-[${chain.iconBackground}] w-[12px] h-[12px] rounded-[50%] overflow-hidden mr-[4px]`}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            className="w-[25px] h-[25px] object-cover"
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button 
                    className='text-textOrange font-semibold text-[.8vmax] bg-secondaryAlt py-[8px] px-[10px] rounded-[8px]'
                    onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}

    </ConnectButton.Custom>
  );
};

export default CustomConnectBtn;