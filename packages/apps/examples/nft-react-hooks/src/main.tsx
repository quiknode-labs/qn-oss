import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { IcyProvider } from '@quicknode/nft-react-hooks';

import './index.css';

import App from './app/app';
import Home from './app/scenes/Home';
import Wallets from './app/scenes/Wallets';
import Collections from './app/scenes/Collections';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <IcyProvider apiKey="58fb170f-0578-4164-971d-686af1a7c0bc">
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/collections" element={<Collections />} />
          </Route>
        </Routes>
      </Router>
    </IcyProvider>
  </React.StrictMode>
);
