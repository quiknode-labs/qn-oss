import { useTrendingCollections } from '@quicknode/nft-react-hooks';

import './Collections.css';
 
function Collections() {
  const { collections } = useTrendingCollections({ orderBy: 'SALES', orderDirection: 'DESC' });

  return (
    <div className="App">
      <div>
        Stats in last hour
      </div>
      <table>
        <thead>
          <td>Collection</td>
          <td style={{ textAlign: "right" }}>Floor</td>
          <td style={{ textAlign: "right" }}>Volume</td>
          <td style={{ textAlign: "right" }}>Total Sales</td>
          <td style={{ textAlign: "right" }}>Average</td>
        </thead>
        <tbody>
          {collections.map(
            (collection) => {
              return (
                <tr key={collection.address}>
                  <td>{collection.name}</td>
                  <td className="mono">Ξ{collection.stats.floor.toFixed(3)}</td>
                  <td className="mono">Ξ{collection.stats.volume.toFixed(3)}</td>
                  <td className="mono">{collection.stats.totalSales}</td>
                  <td className="mono">Ξ{collection.stats.average.toFixed(3)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Collections;

