import React, { useRef } from 'react'
import PlayerEvangelion from "./PlayerEvangelion"
import { useState,useEffect } from 'react'
import IkariShinjistheme from "./Music/IkariShinjistheme.mp3"
import ReiII  from "./Music/ReiII.mp3"
import Batailledécisive from "./Music/Batailledécisive.mp3"
import AngelofDoom from "./Music/AngelofDoom.mp3"
import ReiI from "./Music/ReiI.mp3"
import ACruelAngels from "./Music/ACruelAngels.mp3"
import ThisisTheDream from "./Music/ThisisTheDream.mp3"
import InMySpirit from "./Music/InMySpirit.mp3"
import Fate from "./Music/Fate.mp3"
import CruelDilemme from "./Music/CruelDilemme.mp3"
import IShinji from "./Music/I.Shinji.mp3"
import Thanatos from "./Music/Thanatos.mp3"
import TheFinalDecisionWeAllMustTake from "./Music/TheFinalDecisionWeAllMustTake.mp3" 
function MusicPlayerEvangelion() {
    const songsdata = [
        {
            "title":"A Cruel Angel's Thesis (Director's Edit Version)",
            "url":ACruelAngels
        },
        {
            "title": "Ikari Shinji's theme",
            "url": IkariShinjistheme,
           
        },
        {
            "title": "Rei I",
            "url":  ReiI,         
        },
        {
            "title": "Bataille décisive",
            "url": Batailledécisive
        },
        {
          "title": "Angel of Doom",
          "url":AngelofDoom
        },
        {
          "title":"Rei II",
          "url":ReiII
        },
        {
          "title":"Cruel Dilemme (I-IV)",
          "url":CruelDilemme
        },
        {
            "title":"This is The Dream",
            "url":ThisisTheDream
          },
          {
            "title":"In My Spirit",
            "url":InMySpirit
          },
          {
            "title":"I.Shinji",
            "url":IShinji
          },
          {
            "title":"Fate",
            "url":Fate
          },
          {
            "title":"Thanatos",
            "url":Thanatos
          },
          {
            "title":"The Final Decision We All Must Take",
            "url":TheFinalDecisionWeAllMustTake 
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
        <PlayerEvangelion songs={songs}  isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex}  />
        
      </div>
    );
  }
  


export default MusicPlayerEvangelion