import React, { useRef } from 'react'
import PlayerStarWars from "./PlayerStarWars"
import { useState,useEffect } from 'react'
import BinarySunset from "./Music/BinarySunset.mp3"
import DarthVader  from "./Music/DarthVader.mp3"
import DueloftheFates from "./Music/DueloftheFates.mp3"
import Mandolarian from "./Music/Mandalorian.mp3"
import AcrosstheStar from "./Music/AcrosstheStars.mp3"
import MainTheme from "./Music/MainTheme.mp3"

function MusicPlayerStarWars() {
    const songsdata = [
        {
            "title":"Star Wars Main Theme",
            "url":MainTheme
        },
        {
            "title": "The Force Suite (Theme)",
            "url": BinarySunset,
           
        },
        {
            "title": "The Imperial March (Darth Vader's Theme)",
            "url":  DarthVader,         
        },
        {
            "title": "Duel of the Fates",
            "url": DueloftheFates
        },
        {
          "title": "The Mandalorian OST - Main Theme",
          "url":Mandolarian
        },
        {
          "title":"Across the Stars (Love Theme from Star Wars: Attack of the Clones)",
          "url":AcrosstheStar
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
        <PlayerStarWars songs={songs}  isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex}  />
        
      </div>
    );
  }
  


export default MusicPlayerStarWars