import React from 'react'

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


function DropRepToken() {
  return (
    <Container>
    <div className='song_info'> 0x123abc </div>
    <div className='mintsong_container'>
    <form action="" className='form'>
        <div className='input_button_container'>
            <div className='mintsong_form_input'>
                        <TextField id="outlined-basic" label="Title" variant="outlined" required />
                        
            </div >
        </div>
       
        <div className='input_button_container'>
            <div className='mintsong_form_input'>
                        <TextField id="outlined-basic" label="Author" variant="outlined" required />
                        
            </div>
        </div>
       
        <div className='input_button_container'>
            <div className='mintsong_form_input'>
                        <TextField id="outlined-basic" label="Duration" variant="outlined" required />
                        
            </div>
        </div>
      

    </form> 
    <Divider orientation="vertical" variant="middle" flexItem />
        <div className='image_preview'>
          <img src='./images/discord.png' alt='cover image'/>
        </div>
    </div>
    
    <div className='mint_button'>
        <Button variant="contained" disableElevation fullWidth>
        JOIN THE AIRDROP WHITELIST
        </Button> 
    </div>
</Container>
  )
}

export default DropRepToken