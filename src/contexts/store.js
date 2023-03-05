import React, { createContext, useContext, useReducer } from "react";
import { NETWORK } from "../config/constants";

const initialState = {
  walletType: undefined,
  junoConnection: undefined,
  wallet: undefined,
  openWalletModal: undefined,
  net: NETWORK,
  address: undefined,
};

const StoreContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case "setWalletType":
      return { ...state, walletType: action.payload };
    case "setJunoConnection":
      return { ...state, junoConnection: action.payload };
    case "setWallet":
      return { ...state, wallet: action.payload };
    case "setWalletModal":
      return { ...state, openWalletModal: action.payload };
    case "setNet":
      return { ...state, net: action.payload };
    case "setAddress":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export const useJunoConnection = () => {
  const { state } = useStore();
  return state.junoConnection;
};

export const useWallet = () => {
  const { state } = useStore();
  return state.wallet;
};
