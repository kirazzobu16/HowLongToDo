import React, { useRef } from 'react'
import PlayerLotr from "./PlayerLotr"
import { useState,useEffect } from 'react'
import ConcerningHobbits from "./MusicLotr/ConcerningHobbits.mp3"
import OneRingToRuleAll from "./MusicLotr/OneRingToRuleAll.mp3"
import TheCouncilodElrond from "./MusicLotr/TheCouncilodElrond.mp3"
import TheRidersofRohan from "./MusicLotr/TheRidersofRohan.mp3"
import ManyMeetings from "./MusicLotr/ManyMeetings.mp3"

function MusicPlayerLotr() {
    const songsdata = [
        {
            "title": "One Ring to Rule Them All",
            "url": OneRingToRuleAll,
           
        },
        {
            "title": "Concerning Hobbits (Theme for Hobbit)",
            "url": ConcerningHobbits,
            
        },
        {
            "title": "The Council of Elrond (feat. Aniron) (Theme for Aragorn and Arwen)",
            "url": TheCouncilodElrond
        },
        {
          "title": "The Riders of Rohan (Theme for Human)",
          "url":TheRidersofRohan
        },
        {
          "title":"Many Meetings",
          "url":ManyMeetings
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
        <PlayerLotr songs={songs}  isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex}  />
        
      </div>
    );
  }
  


export default MusicPlayerLotr