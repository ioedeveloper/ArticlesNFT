import React from 'react'
import SongNFT from '../components/SongNFT/SongNFT'


 


function SongNFTList() {

  const songs = ["https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg","https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg","https://actions.google.com/sounds/v1/alarms/dosimeter_alarm.ogg","https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg","https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg","https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg"]
    return (
      <div className='songNFTList_container'>
        {songs.map((song, idx) => {
            return (
              < SongNFT key={idx} image='https://picsum.photos/200/300' url={song} title='Good Bad'/>
            )
        })}
      </div>
    );
  }

export default SongNFTList