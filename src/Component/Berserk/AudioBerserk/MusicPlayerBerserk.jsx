import React, { useRef } from 'react'
import PlayerBerserk from "./PlayerBerserk"
import { useState,useEffect } from 'react'
import Gats from "./MusicBerserk/Gats.mp3"
import BEHELIT from "./MusicBerserk/BEHELIT.mp3"
import WaitingSoLong from "./MusicBerserk/WaitingSoLong.mp3"
import BloodAndGuts from "./MusicBerserk/BloodAndGuts.mp3"
import MyBrother from "./MusicBerserk/MyBrother.mp3"

function MusicPlayerBerserk() {
    const songsdata = [
        {
            "title": "Behelit",
            "url": BEHELIT,
           
        },
        {
            "title": "Guts Theme",
            "url": Gats,
            
        },
        {
            "title": " Waiting So Long",
            "url": WaitingSoLong
        },
        {
          "title": "Blood and Guts",
          "url":BloodAndGuts
        },
        {
          "title":"My Brother Dragon Slayer",
          "url":MyBrother
        }
    ]

    const [songs] = useState(songsdata);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    
    useEffect(() => {
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
    }, [currentSongIndex,songs]);


    const [isplaying, setisplaying] = React.useState(false);
    const [currentSong, setCurrentSong] = useState(songsdata[0]);
  
    const audioElem = useRef(null);
    
    useEffect(() => {
      if (isplaying) {
        audioElem.current.play();
      }
      else {
        audioElem.current.pause();
      }
    }, [isplaying])
  
    const onPlaying = () => {
      const duration = audioElem.current.duration;
      const ct = audioElem.current.currentTime;
  
      setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
  
    }
  
  
    return (
      <div>
        <audio autoPlay src={songs[currentSongIndex].url} ref={audioElem} onTimeUpdate={onPlaying} />
        <PlayerBerserk songs={songs}  isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex}  />
        
      </div>
    );
  }
  


export default MusicPlayerBerserk