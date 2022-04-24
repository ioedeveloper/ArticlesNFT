import React, {useState} from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';


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
          <ArticleTwoToneIcon fontSize="large"/>{title}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, margin: '5px'}}>
          <Button variant="outlined">Add to Article</Button>
        </Box>
      </Box>
    </Card>
  );

  }

export default AddPlayList;