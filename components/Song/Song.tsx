import React, { useState, useEffect } from "react";

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { SongResponse } from '../../contracts/types/playlisttoken-abi'
import {  getContract } from '../../contracts/contract'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from "@mui/material/Box";
import { ManifestosResponse } from "../../contracts/types/manftestotoken-abi";
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import './Song.css'

interface SongProps {
    song: {
     uri: string,
     author: string
     articleInfo: any   
    }
    playlistId: number,
    updated: any // function
}

const Song = ({ song, playlistId, updated }: SongProps) => {
    const [metadata, setMetadata] = useState({} as any)

    console.log({song: song, playlistId, updated })
    // uri: "linkipfs://QmWrvafcik6NFJzgYjwmHFot8RHdGqRh2bhyijfKdmFLSe"
    const { articleInfo, uri } = song
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
    
    const title = `${articleInfo}`
    console.log({song})
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
            {song.articleInfo.score}
            
            </Box>
             </Tooltip>
            </b></span>
            <div className="buttons">
                <Button className="votingButton" type="button" variant="outlined" onClick={async () => { 
                        const tx = await getContract(window.ethereum).manftestotokenContract.upvoteArticle(playlistId, playlistId)
                        await tx.wait()
                        updated()
                    }}><ThumbUpIcon /></Button>
                    <Button className="downvottingButton" type="button" variant="outlined" onClick={async () => { 
                        const tx = await getContract(window.ethereum).manftestotokenContract.upvoteArticle(playlistId, playlistId)
                        await tx.wait()
                        updated()
                    }}><ThumbDownIcon /></Button>
            </div> 
               
            </div>
            
        </div>
    )
}

export default Song;
