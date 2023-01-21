import {useState} from 'react'
import HeaderClassic from './HeaderClassic'
import ListClassic from './ListClassic'
import "./PageClassic.css"
import ThemeClassic from './ThemeClassic'
import MusicPlayerClassic from "./AudioClassic/MusicPlayerClassic"
import { Helmet } from 'react-helmet'
function ClassicMusic() {
  const [Toast,setToast]=useState("")
  const [deleteToast,setDeleteToast]=useState("")
  return (
    <div className='PageClassic'>
       <Helmet>
          <title>How Long To Do|Classic Music</title>
        </Helmet>
       <ThemeClassic /> 
       <HeaderClassic Toast={Toast} setToast={setToast} deleteToast={deleteToast} setDeleteToast={setDeleteToast}/>
       <ListClassic setDeleteToast={setDeleteToast}/>
       <MusicPlayerClassic/>
    </div>
  )
}

export default ClassicMusic