import { useReducer } from "react";
import { NETWORK, CHAINS } from "../config/constants";
import { createContainer } from 'react-tracked';

const initialState = {
  walletType: undefined,
  junoConnection: undefined,
  wallet: undefined,
  openWalletModal: undefined,
  net: NETWORK,
  address: undefined,
  investChain: CHAINS[0],
  investToken: "",
  investAmount: 0,
  investTrcyAmount: 0,
  investName: "",
  investTitle: "",
  investEmail: "",
  investSign: undefined,
  investDate: ""
};

const reducer = (state, action) => {
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
    case "setInvestChain":
      return { ...state, chain: action.payload };
    case 'setInvestToken':
      return { ...state, token: action.payload };
    case 'setInvestAmount':
      return { ...state, investAmount: action.payload };
    case 'setInvestName':
      return { ...state, investName: action.payload };
    case 'setInvestTitle':
      return { ...state, investTitle: action.payload };
    case 'setInvestEmail':
      return { ...state, investEmail: action.payload };
    case 'setInvestSign':
      return { ...state, investSign: action.payload };
    case 'setInvestDate':
      return {...state, investDate: action.payload };
    default:
      return state;
  }
};

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);

export const useJunoConnection = () => {
  const state = useTrackedState();
  return state.junoConnection;
};

export const useWallet = () => {
  const state = useTrackedState();
  return state.wallet;
};
