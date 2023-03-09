// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Welcome from './welcome';
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
            <Link to="/loopypage">Loopy Donut Fan Club (OWNERS ONLY!!)</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/loopypage"
          element={
            <TokenGatedRoute>
              <LoopyPage />
            </TokenGatedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
