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
                    className="text-[var(--white)] font-semibold text-[.8vmax] bg-[var(--orange-bg)] py-[8px] w-[150px] px-[10px] rounded-[8px]"
                    onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button 
                    className="text-[var(--white)] font-semibold text-[.8vmax] bg-[var(--orange-bg)] py-[8px] px-[10px] rounded-[8px]"
                    onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex md:gap-[12px] gap-[5px]">
                  <button
                    onClick={openChainModal}
                   className='flex min-w-[100px] items-center text-[var(--white)] font-semibold text-[clamp(.8rem,1vmax,1rem)] bg-[var(--orange-bg)] md:py-[8px] py-[4px] md:px-[10px] px-[8px] rounded-[8px] uppercase'
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        className={`bg-[${chain.iconBackground}] w-[12px] h-[12px] rounded-[50%] overflow-hidden mr-[4px]`}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain Name'}
                            src={chain.iconUrl}
                            className="w-[clamp(1.5rem,2vmax,2rem)] h-[clamp(1.5rem,2vmax,2rem)] object-cover"
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button 
                    className='text-[var(--white)] font-semibold text-[clamp(.8rem,1vmax,1rem)] whitespace-nowrap bg-[var(--orange-bg)] md:py-[8px] py-[4px] md:px-[10px] px-[8px] rounded-[8px]'
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