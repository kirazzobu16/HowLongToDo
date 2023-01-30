import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import ThemeEvangelion from "./ThemeEvangelion"
import "./PageEvangelion.css"
import HeaderEvangelion from './HeaderEvangelion'
import ListEvangelion from "./ListEvangelion"
import MusicPlayerEvangelion from './AudioEvangelion/MusicPlayerEvangelion'
function Evangelion() {
    const [Toast,setToast]=useState("")
    const [deleteToast,setDeleteToast]=useState("")
  return (
    <div className='PageEvangelion'>
        <Helmet>
            <title>How Long To Do|Neon Genesis Evangelion</title>
        </Helmet>
        <ThemeEvangelion/>
        <HeaderEvangelion Toast={Toast} setToast={setToast} deleteToast={deleteToast} setDeleteToast={setDeleteToast}/>
        <ListEvangelion setDeleteToast={setDeleteToast} />
        <MusicPlayerEvangelion/>
    </div>
  )
}

export default Evangelion