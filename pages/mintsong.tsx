import React from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';

const MintSong = () => {
    return (
        <Container>
            <div className='song_info'> 0x123abc </div>
            <div className='mintsong_container'>
            <form action="" className='form'>
                <div className='input_button_container'>
                    <div className='mintsong_form_input'>
                                <TextField id="outlined-basic" label="Title" variant="outlined" required />
                                
                    </div >
                    <div className='mintsong_form_button'>
                                <Fab variant="extended">
                                        Load MP3
                                </Fab>
                    </div>
                </div>
               
                <div className='input_button_container'>
                    <div className='mintsong_form_input'>
                                <TextField id="outlined-basic" label="Author" variant="outlined" required />
                                
                    </div>
                    <div className='mintsong_form_button'>
                                <Fab variant="extended">
                                        Load COVER
                                </Fab>
                    </div>
                </div>
               
                <div className='input_button_container'>
                    <div className='mintsong_form_input'>
                                <TextField id="outlined-basic" label="Duration" variant="outlined" required />
                                
                    </div>
                    <div className='mintsong_form_button'>
                                <Fab variant="extended">
                                        License
                                </Fab>
                    </div>
                </div>
              

            </form>
            
                <div className='image_preview'>
                  <img src='./images/cover_image.jpg' alt='cover image'/>
                </div>
            </div>
            <div className='mint_button'>
                <Button variant="contained" disableElevation size='large'>
                    Mint
                </Button> 
            </div>
        </Container>
    )
}

export default MintSong;