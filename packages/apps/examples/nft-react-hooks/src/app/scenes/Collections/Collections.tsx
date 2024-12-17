import {
  useTrendingCollections,
  TrendingCollectionsTimePeriod,
} from '@quicknode/icy-nft-hooks';
import { useState } from 'react';

import './Collections.css';

function Collections() {
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const { collections, pageInfo } = useTrendingCollections({
    orderBy: 'SALES',
    orderDirection: 'DESC',
    timePeriod: TrendingCollectionsTimePeriod.ONE_HOUR,
    first: 5,
    after: cursor,
  });

  return (
    <div className="App">
      <div>Stats in last hour</div>
      <table>
        <thead>
          <th style={{ textAlign: 'left' }}>Collection</th>
          <th style={{ textAlign: 'right' }}>Floor</th>
          <th style={{ textAlign: 'right' }}>Volume</th>
          <th style={{ textAlign: 'right' }}>Total Sales</th>
          <th style={{ textAlign: 'right' }}>Average</th>
        </thead>
        <tbody>
          {collections.map((collection) => {
            return (
              <tr key={collection.address}>
                <td>{collection.name}</td>
                <td className="mono">Ξ{collection.stats.floor.toFixed(3)}</td>
                <td className="mono">Ξ{collection.stats.volume.toFixed(3)}</td>
                <td className="mono">{collection.stats.totalSales}</td>
                <td className="mono">Ξ{collection.stats.average.toFixed(3)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {pageInfo?.hasNextPage && (
        <div
          style={{
            alignItems: 'flex-end',
            width: '100%',
            justifyContent: 'flex-end',
            display: 'flex',
          }}
        >
          <button
            onClick={() => {
              setCursor(pageInfo.endCursor ?? undefined);
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Collections;
