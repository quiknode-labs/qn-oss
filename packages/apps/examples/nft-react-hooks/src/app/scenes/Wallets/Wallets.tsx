import { useWalletNFTs } from '@quicknode/icy-nft-hooks';
import { useState } from 'react';

import './Wallets.css';

function Wallets() {
  const [ensName, setEnsName] = useState('');
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const { nfts, isSearchValid, pageInfo } = useWalletNFTs({ ensName, first: 10, after: cursor });

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

      {pageInfo?.hasNextPage && (
        <div style={{ alignItems: 'flex-end', width: '100%', justifyContent: 'flex-end', display: 'flex' }}>
          <button onClick={() => {
            setCursor(pageInfo.endCursor ?? undefined)
          }}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Wallets;
