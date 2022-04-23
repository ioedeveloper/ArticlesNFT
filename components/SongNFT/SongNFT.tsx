import React, {useState} from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Slider from '@mui/material/Slider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import useAudio from '../../hooks/useAudio';



interface SongNFTListProps {
    image: string;
    url: string;
    title: string
}

function SongNFT({ image, url, title }: SongNFTListProps) {
    const theme = useTheme();

    const [playing, toggle] = useAudio(url)

    const [isPlaying, setIsPlaying] = useState(false);
    const [isUpVote, setIsUpVote] = useState(false);

    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);

    const handleTogglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const handleToogleVote = () => {
        setIsUpVote(!isUpVote)
    }

  return (
    <Card sx={{ display: 'flex', margin: "20px", flexDirection:'column'}}>
         <CardMedia
            component="img"
            sx={{ width: '100%', height: '100px', objectFit: 'cover'  }}
            image={image}
            alt="Live from space album cover"
            height='70%'
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value as number)}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          {/* <IconButton aria-label="previous">
           < ThumbDownAltIcon/>
          </IconButton> */}
          <IconButton aria-label="play/pause" onClick={toggle}>
           {playing ? <PauseIcon sx={{ height: 38, width: 38 }} /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
          </IconButton>
          <IconButton aria-label="next" onClick={handleToogleVote}>
            {isUpVote ? <FavoriteIcon color='error'/> : <FavoriteIcon />}
          </IconButton>
        </Box>
      </Box>
     
    </Card>
  );

  }

export default SongNFT

