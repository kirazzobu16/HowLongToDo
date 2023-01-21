import React, { useRef } from 'react'
import Player from "./playerClassic"
import { useState,useEffect } from 'react'
import BachPassaglia from "./Music/BachPassaglia.mp3"
import BeethovenSymphonyNo7 from "./Music/Beethoven-SymphonyNo7.mp3"
import ClairDeLune from "./Music/ClairDeLune.mp3"
import MozartLacrimosa from "./Music/Mozart - Lacrimosa.mp3"
import Winter from "./Music/Winter.mp3"
import Moonlight from "./Music/Moonlight.mp3"
import BachAir from "./Music/BachAir.mp3"
function MusicPlayer() {
    const songsdata = [
        {
            "title": "Beethoven - Symphony No.7 in A major op.92 - II, Allegretto",
            "url": BeethovenSymphonyNo7,
           
        },
        {
            "title": "Passacaglia and Fugue in C Minor, BWV 582",
            "url": BachPassaglia,
            
        },
        {
            "title": "Suite bergamasque, CD 82, L. 75: III. Clair de lune",
            "url": ClairDeLune
        },
        {
          "title": "Mozart - Lacrimosa",
          "url":MozartLacrimosa
        },
        {
          "title":"The Four Seasons - Winter - Allegro Non Molto",
          "url":Winter
        },
        {
            "title":"Piano Sonata in C Sharp Minor, Op. 27, Moonlight: I. Adagio Sostenuto",
            "url":Moonlight
        },
        {
            "title":"Bach: Air, Orchestral Suites No. 3 in D major, BWV 1068",
            "url":BachAir
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