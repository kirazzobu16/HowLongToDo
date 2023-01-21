import React, { useRef } from 'react'
import Player from "./Player"
import { useState,useEffect } from 'react'
import AsonsPath from "./Music/A Sons Path.mp3"
import GodofWarRagnarök from "./Music/God of War Ragnarök.mp3"
import TheHammerofThor from "./Music/The Hammer of Thor.mp3"
import Vanaheim from "./Music/Vanaheim.mp3"
import TheHandofOdin from "./Music/The Hand of Odin.mp3"

function MusicPlayer() {
    const songsdata = [
        {
            "title": "Bear McCreary - God of War Ragnarök | God of War Ragnarök (Original Soundtrack) ft. Eivør",
            "url": GodofWarRagnarök,
           
        },
        {
            "title": "Bear McCreary - A Son's Path | God of War Ragnarök (Original Soundtrack)",
            "url": AsonsPath,
            
        },
        {
            "title": "Bear McCreary - The Hammer of Thor | God of War Ragnarök (Original Soundtrack)",
            "url": TheHammerofThor
        },
        {
          "title": "Bear McCreary - Vanaheim | God of War Ragnarök (Original Soundtrack)",
          "url":Vanaheim
        },
        {
          "title":"Bear McCreary - The Hand of Odin | God of War Ragnarök (Original Soundtrack)",
          "url":TheHandofOdin
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
        <Player songs={songs}  isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex}  />
        
      </div>
    );
  }
  


export default MusicPlayer