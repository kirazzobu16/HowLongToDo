import React from 'react'
import Header from './Header'
import List from './List'
import MusicPlayer from './AudioPlayer/MusicPlayer'
import Theme from './Theme'
import "./Page.css"
import { useState } from 'react'
import {Helmet} from "react-helmet"
function Page() {
  
  const [Toast,setToast]=useState("")
  const [deleteToast,setDeleteToast]=useState("")
  return (
    <div className='Page'>
        <Helmet>
          <title>How Long To Do|God of War</title>
        </Helmet>
        <Theme />
        <Header Toast={Toast} setToast={setToast} deleteToast={deleteToast} setDeleteToast={setDeleteToast}/>
        <List  setDeleteToast={setDeleteToast}  />
        <MusicPlayer/>       
    </div>
  )
}

export default Page