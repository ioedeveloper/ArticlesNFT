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

      </Box>
     
    </Card>
  );

  }

export default SongNFT

