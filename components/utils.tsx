import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'

const INFURA_ID = '27b6aca4f2c94025ae9afa7278badb31'
export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID // required
    }
  },
  'custom-walletlink': {
    display: {
      logo:
        'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)'
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1
    },
    package: WalletLink,
    connector: async (_: any, options: any) => {
      const { appName, networkUrl, chainId } = options
      const walletLink = new WalletLink({
        appName
      })
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
      await provider.enable()
      return provider
    }
  }
}

export let web3Modal: any
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions // required
  })
}
