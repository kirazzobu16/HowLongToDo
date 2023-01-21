import React, { useRef } from 'react';
import './playerClassic.scss';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill,BsFillSkipEndCircleFill,BsFillVolumeUpFill,BsFillVolumeMuteFill} from 'react-icons/bs';
import { useEffect,useState} from 'react';


const PlayerClassic = ({audioElem, isplaying, setisplaying, currentSong, songs,currentSongIndex,setCurrentSongIndex})=> {

  const clickRef = useRef(null);
  const [volumeChange, setVolume] = useState(100)
  const[isMute,setisMute]=useState(true)
  //Şarkı bitince bir sonraki şarkıya geçer
  useEffect(()=>{
    
    console.log(volumeChange)
    if(audioElem.current.currentTime===currentSong.length){
        setCurrentSongIndex(() => {
        let temp =currentSongIndex;
        temp++;
        if (temp >songs.length - 1) {
            temp = 0;
        }
        
        return temp;
        
    });
  }})
  const PlayPause = ()=>
  {
    //Pause or Play the music
    setisplaying(!isplaying);

  }

  //Şarkının istenilen yerde çalmasını sağlar
  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;
  }

   
    


  const SkipSong = (forwards = true) => {
  setisplaying(true)
  setCurrentSongIndex(prev => {
        if (forwards) {
            let temp = prev;
            temp = temp + 1;
            if (temp > songs.length - 1) {
                temp = 0;
            }
            
            return temp;
        }

        let temp = prev;
        temp = temp - 1;

        if (temp < 0) {
            temp = songs.length - 1;
        }
        return temp;
    })
}

 const ChangeSound=(e)=>{
    setisMute(true)
    setVolume( e.nativeEvent.offsetX)
    audioElem.current.volume = e.nativeEvent.offsetX /100

 }

 const MuteSound=()=>{
  setisMute(!isMute)

  if(isMute===true){
    audioElem.current.volume=0;
    
  } else{
    audioElem.current.volume=volumeChange/100
  }
 }

  return (
   
    <div className='player_containerClassic'>
      <div className="title">
        <p>{songs[currentSongIndex].title}</p>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="options ">
        <div className='volume'>
          {isMute?<BsFillVolumeUpFill className='btn_action'onClick={MuteSound}/>:<BsFillVolumeMuteFill className='btn_action' onClick={MuteSound}/>}
          <div className='volume_meter'>
            <div className="navigationSound btn_action">
              <div className="navigation_wrapperSound "  onClick={(e)=>ChangeSound(e)}>
                <div className="seek_barSound" value={volumeChange} style={isMute===false?{width:0}:{width:volumeChange}} max={100}></div>
              </div>
            </div>
          </div>    
        </div>        
        <div className="controls">  
          <BsFillSkipStartCircleFill className='btn_action' onClick={()=>SkipSong(false)}/>
          {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}
          <BsFillSkipEndCircleFill className='btn_action'  onClick={()=>SkipSong()} />      
        </div>
      </div>  
    </div>        
    
      
  
  )
}

export default PlayerClassic