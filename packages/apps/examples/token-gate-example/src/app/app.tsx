// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from './nx-welcome';
import { Route, Routes, Link } from 'react-router-dom';
import TokenGatedRoute from './TokenGatedRoute';
import LoopyPage from './LoopyPage';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/loopypage">
              Click here for token-gated loopy content
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<NxWelcome />} />
        <Route
          path="/loopypage"
          element={
            <TokenGatedRoute>
              <LoopyPage />
            </TokenGatedRoute>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
