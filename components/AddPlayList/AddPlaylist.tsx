import React, {useState} from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


interface SongNFTListProps {
    image: string;
    profileSrc: string;
    title: string
}

function AddPlayList({ image, profileSrc, title }: SongNFTListProps) {
    const theme = useTheme();

    const [isPlaying, setIsPlaying] = useState(false);
    const [isUpVote, setIsUpVote] = useState(false);

    const handleTogglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const handleToogleVote = () => {
        setIsUpVote(!isUpVote)
    }

  return (
    <Card sx={{ display: 'flex', margin: "20px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, margin: '5px'}}>
          <Button variant="outlined">Add to Playlist</Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={image}
        alt="Live from space album cover"
      />
    </Card>
  );

  }

export default AddPlayList;