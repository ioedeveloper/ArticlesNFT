import '../styles/globals.css'
import '../components/Header/Header.css'
import '../components/Playlist/Playlist.css'
import '../components/Song/Song.css'
import '../components/SongNFT/SongNFT.css'

import "../components/AddPlayList/AddPlayList.css"
import './SongNFTList.css'
import './Home.css'

import Header from '../components/Header/Header'
import NftProvider from '../context/nftProvider'


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <NftProvider>
    <Header />
    <Component {...pageProps} />
  </NftProvider>

  </>
}

export default MyApp
