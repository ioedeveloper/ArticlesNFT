import React, {useReducer, useCallback, useEffect, useState, useContext} from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import { providers } from 'ethers'

import NftContext from '../../context/nftContext'

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcon from '@mui/icons-material/Add';


import {initialState, reducer} from '../reducer'
import {providerOptions, web3Modal} from '../utils'

import { ellipseAddress, getChainData } from '../../libs/utilities'
import {  getContract } from '../../contracts/contract'

const Header = () => {

    // const [state, dispatch] = useReducer(reducer, initialState)
    const {globalState, connectWallet, disconnetWallet} = useContext(NftContext)
    const [balance, setBalance] = useState('')

    console.log({ globalState: globalState, connectWallet: connectWallet})
    const { provider, web3Provider, address, chainId } = globalState
  
    const connect = useCallback(async function () {
    //   This is the initial `provider` that is returned when
    //   using web3Modal to connect. Can be MetaMask or WalletConnect.
        const provider1 = await web3Modal.connect()
  
    //   We plug the initial `provider` into ethers.js and get back
    //   a Web3Provider. This will add on methods from ethers.js and
    //   event listeners such as `.on()` will be different.
      const web3Provider = new providers.Web3Provider(provider1)
  
      const signer = web3Provider.getSigner()
      const address = await signer.getAddress()
      console.log({ address })
      const network = await web3Provider.getNetwork()

      console.log({ network })

      connectWallet({
        type: 'SET_WEB3_PROVIDER',
        provider,
        web3Provider,
        address,
        chainId: network.chainId,
      })
    }, [])
  
    const disconnect = useCallback(

        async function () {
            await web3Modal.clearCachedProvider()
            if (provider?.disconnect && typeof provider.disconnect === 'function') {
              await provider.disconnect()
            }
            disconnetWallet({
                type: 'RESET_WEB3_PROVIDER'
             })
        },
      [provider]
    )
  
    // Auto connect to the cached provider
    useEffect(() => {
      if (web3Modal.cachedProvider) {
        connect()
        console.log("has connected")
        if (window.ethereum && window.ethereum.selectedAddress) {
          // getContract(window.ethereum).dropTokenContract.balanceOf(window.ethereum.selectedAddress).then((balance: any) => {
          //   setBalance(balance.toString())
          // })
        }
      }
    }, [connect])

    useEffect(() => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        // getContract(window.ethereum).dropTokenContract.balanceOf(window.ethereum.selectedAddress).then((balance: any) => {
        //   setBalance(balance.toString())
        // })
      }
    }, [])
  
    // A `provider` should come with EIP-1193 events. We'll listen for those events
    // here so that when a user switches accounts or networks, we can update the
    // local React state with that new information.
    useEffect(() => {
      if (provider?.on) {
        const handleAccountsChanged = (accounts: string[]) => {
          // eslint-disable-next-line no-console
          console.log('accountsChanged', accounts)
          connectWallet({ 
            type: 'SET_ADDRESS',
            address: accounts[0],
          })
        }
  
        // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
        const handleChainChanged = (_hexChainId: string) => {
          window.location.reload()
        }
  
        const handleDisconnect = (error: { code: number; message: string }) => {
          // eslint-disable-next-line no-console
          console.log('disconnect', error)
          disconnect()
        }
  
        provider.on('accountsChanged', handleAccountsChanged)
        provider.on('chainChanged', handleChainChanged)
        provider.on('disconnect', handleDisconnect)
  
        // Subscription Cleanup
        return () => {
          if (provider.removeListener) {
            provider.removeListener('accountsChanged', handleAccountsChanged)
            provider.removeListener('chainChanged', handleChainChanged)
            provider.removeListener('disconnect', handleDisconnect)
          }
        }
      }
    }, [provider, disconnect])

    return (
        <div className="header">
            <div className='header_left'>
                <img src='../images/remix.png' alt='logo'/>
                <p className="main-text">ETHAmstMaNFTesto</p>
            </div>
          
            <div className='header_nav_items'>
              
            </div>

            <div className="header_right">
              {/* <div  className="header_option">your balance : {balance} drop</div> */}
                    <Link href='/' >
                        <div className="header_option">
                            <PlaylistPlayIcon fontSize="small" />
                            <div className="text_font">Articles</div>
                        </div>
                    </Link>
                

             <Link href='/addtoarticles' >
                 <div className="header_option">
                    <AddIcon fontSize="small" />
                    <div className="text_font">Add Article</div>
                </div>
              </Link> 

                {web3Provider ? (
                     <div className="header_option" onClick={disconnect}>
                     <AccountBalanceWalletIcon fontSize="small" />
                     <div className="text_font">Disconnect</div>
                 </div>
                ) : (
                     <div className="header_option" onClick={connect}>
                     <AccountBalanceWalletIcon fontSize="small" />
                     <div className="text_font">Connect Wallet</div>
                 </div>
                ) } 
                
            </div>
        </div>
    )
}

export default Header;