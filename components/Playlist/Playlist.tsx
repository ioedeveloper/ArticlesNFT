import React, { useState } from "react";

import Link  from "next/link";
import Image from 'next/image'
import ArticlesImage from '../../public/images/articlesNFT.jpg'


import Song from '../Song/Song'

import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useEffect } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {  getContract } from '../../contracts/contract'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

// import './Playlist.css';

const Playlist = () => {
    const [articles, setArticle] = useState<Array<any>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>('')
    const [balance, setBalance] = useState('')
    const articleId = 0
    const loadContent = async () => {
        if (!window.ethereum) return
        await window.ethereum.enable()
        window.ethereum.on('accountsChanged', function (accounts) {
            // Time to reload your interface with accounts[0]!
        });

        setIsLoading(true)
        // const balance = await getContract(window.ethereum).dropTokenContract.balanceOf(window.ethereum.selectedAddress)
        const articleTokenContract = getContract(window.ethereum).articletokenContract
        const manftestoTokenContract = getContract(window.ethereum).manftestotokenContract
        const manifesto = await manftestoTokenContract.manifestos(articleId)  
        const articleAPI = await manftestoTokenContract.getManifesto(articleId)
        const articleInfo = []
        for (const article of articleAPI) {
            articleInfo.push({
                uri: await articleTokenContract.tokenURI(article.tokenId),
                author: await articleTokenContract.ownerOf(article.tokenId),
                articleInfo: {
                    score: article.score.toString(),
                    tokenId: article.tokenId.toString(),
                    tokenAddress: article.tokenAddress.toString(),
                }
            })
        }
        articleInfo.sort((a, b) => {
            if (a.articleInfo.score > b.articleInfo.score) {
                return -1;
            }
            if (a.articleInfo.score < b.articleInfo.score) {
                return 1;
            }
            return 0;
            })
        setArticle(articleInfo)
        setName(manifesto.name)
        setBalance(balance.toString())
        setIsLoading(false)
    }
    useEffect(() => {
        (async () => {
            loadContent()
        })()
    }, [])

    const handleUpvotearticlesNFT = () => {
        alert('articles upvoted')
    }


    return (
        <Container maxWidth="lg">
       
        <div className="playlist">
            <div className="playlist_left">
                <div className="playlist_name">{name}</div>

                <div className="playlist_image"> 
                    <img src={ArticlesImage.src} style={{'width': '100%'}} alt="Playlist Image" />
                </div>

                <div> 
                    {isLoading ? 
                    (
                         <Box sx={{ width: '60%', paddingTop:'50px' }}>
                         <LinearProgress />
                       </Box>
                    ) : (articles.map((article, index) => <Song key={index} updated={() => loadContent()} song={article} playlistId={articleId} /> ))}
                    <MoreHorizIcon />
                    <br />
                    <Button variant="outlined" color="primary" onClick= {handleUpvotearticlesNFT}>
                        Upvote articles 
                    </Button>
                </div>
            </div>
            
            <div className="playlist_right">
            
                <Fab variant="extended" className="playlist_button">
                    <LibraryMusicOutlinedIcon sx={{ mr: 1 }} />
                    <Link href='/songnftlist'>
                        Articles NFTs
                    </Link>
                    
                </Fab>
                <Fab variant="extended" className="playlist_button">
                        <Link href='/mintsong'>
                        Mint your Article NFT
                        </Link>
                </Fab>
            </div>

        </div>
        </Container>
    )
}

export default Playlist;