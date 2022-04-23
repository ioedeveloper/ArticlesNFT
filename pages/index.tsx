import React, {useEffect, useState, useReducer, useCallback} from 'react'
import type { NextPage } from 'next'
import { providers } from 'ethers'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {reducer, initialState} from '../components/reducer'
import { ellipseAddress, getChainData } from '../libs/utilities'



import Header from '../components/Header/Header'
import Playlist from '../components/Playlist/Playlist'


const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Playlist/>

    </div>
  )
}

export default Home
