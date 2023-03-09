import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/scss/style.scss';

import { Provider as StoreProvider } from "./contexts/store"
import { KeplrWalletProvider } from "./contexts/keplrWallet"
import { MetamaskProvider } from "./contexts/metamask"
import { TrustWalletProvider } from "./contexts/trustWallet"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <KeplrWalletProvider>
        <MetamaskProvider>
          <TrustWalletProvider>
            <App />
            <ToastContainer />
          </TrustWalletProvider>
        </MetamaskProvider>
      </KeplrWalletProvider>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();