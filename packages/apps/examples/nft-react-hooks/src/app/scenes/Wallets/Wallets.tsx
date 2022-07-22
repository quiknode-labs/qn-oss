import { useWalletNFTs } from '@quicknode/icy-nft-hooks';
import { useState } from 'react';

import './Wallets.css';

function Wallets() {
  const [ensName, setEnsName] = useState('');
  const { nfts, isSearchValid } = useWalletNFTs({ ensName });

  return (
    <div className="Wallets">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="search">
          <input
            type="text"
            value={ensName}
            onChange={(e) => setEnsName(e.target.value)}
            style={{
              outlineColor: !isSearchValid && ensName.length > 0 ? 'red' : undefined,
            }}
          />
        </div>
      </div>

      {/* <p className={data?.wallet?.address ? 'wallet-address' : 'empty'}>
        {data?.wallet?.address ?? 'Not found'}
      </p> */}

      {nfts.map((nft) => {
        const contract = nft.contract;
        const imageUrl = nft.images.find((i) => !!i.url)?.url;

        return (
          <div
            className="card"
            key={`${nft.tokenId}${nft.contract.address}`}
          >
            <div className="top">
              <div>
                <h1>{contract.name}</h1>
                <h2>
                  {contract.symbol}#{nft.tokenId}
                </h2>
              </div>
              {imageUrl && (
                <div className="img">
                  <img src={imageUrl} alt="lol" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Wallets;
