import React, { useState, useEffect } from "react";

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { SongResponse } from '../../contracts/types/playlisttoken-abi'
import {  getContract } from '../../contracts/contract'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from "@mui/material/Box";
import { ManifestosResponse } from "../../contracts/types/manftestotoken-abi";
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
// import './Song.css'

interface SongProps {
    song: {
     uri: string,
     author: string
     songInfo: ManifestosResponse   
    }
    playlistId: number,
    updated: any // function
}

const Song = ({ song, playlistId, updated }: SongProps) => {
    const [metadata, setMetadata] = useState({} as any)

    console.log({song: song, playlistId, updated })
    // uri: "linkipfs://QmWrvafcik6NFJzgYjwmHFot8RHdGqRh2bhyijfKdmFLSe"
    const { songInfo, uri } = song
    // let ipfs = uri.replace('linkipfs://', '')
    let ipfs = uri.replace('link', '')
    useEffect(() => {
        (async () => {
            // let data = await fetch('https://ipfs.io/ipfs/'+ ipfs) as any
            let data = await fetch(ipfs) as any
            data = await data.json()
            setMetadata(data)
        })()
    }, [])
    
    const title = `${songInfo}`
    console.log({songInfo})
    return (
        <div title={title} className="song">
             <div className='artist_name'>
                <div className="song_name">Article {metadata.name}</div>
            </div> 
          
            <ArticleTwoToneIcon fontSize="large"/>
         
            <div className='upvote'>
            <span className="song_artist"> <b>
            <Tooltip title="upvote count"> 
            <Box sx={{width: 50, bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
            
            </Box>
             </Tooltip>
            </b></span> 
                <Button type="button" variant="outlined" onClick={async () => { 
                    const tx = await getContract(window.ethereum).manftestotokenContract.upvoteArticle(playlistId, songInfo.memberTokenId)
                    await tx.wait()
                    updated()
                }}>upvote</Button>
            </div>
            
        </div>
    )
}

export default Song;
