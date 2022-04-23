import React, {useState, useReducer} from 'react';
import Context from './nftContext';
import {StateType} from '../components/types'
import { initialState, reducer} from '../components/reducer'
import { ActionType } from '../components/types';

import { providers } from 'ethers'
import {providerOptions, web3Modal} from '../components/utils'

const NftProvider = ({ children }: any) => {
    const [globalState, dispatch] = useReducer(reducer, initialState)
    const [state, setState] = useState<StateType>()



    const connectWallet = async (walletInfo: StateType) => {
      dispatch({
        type: 'SET_WEB3_PROVIDER',
        provider: walletInfo.provider,
        web3Provider: walletInfo.web3Provider,
        address: walletInfo.address,
        chainId: walletInfo.chainId,
      })
    }

    const disconnetWallet = async () => {
        dispatch({  type: 'RESET_WEB3_PROVIDER', })
    }

     return (
      <Context.Provider value={{ globalState, connectWallet, disconnetWallet }}>
        {children}
      </Context.Provider>
    );
  };

  export default NftProvider;