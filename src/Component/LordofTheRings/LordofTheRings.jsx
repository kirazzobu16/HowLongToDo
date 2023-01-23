import React from 'react'
import { Helmet } from 'react-helmet'
import "./PageLotr.css"
import { useState } from 'react'
import ThemeLotr from "./ThemeLotr"
import HeaderLotr from "./HeaderLotr"
import ListLotr from "./ListLotr"
import MusicPlayerLotr from "./AudioLotr/MusicPlayerLotr"
function LordofTheRings() {
  const [Toast,setToast]=useState("")
  const [deleteToast,setDeleteToast]=useState("")
  return (
    <div className='PageLotr'>

      <Helmet>
        <title>How Long To Do|The Lord of The Rings</title>
      </Helmet>
      <ThemeLotr />
      <HeaderLotr Toast={Toast} setToast={setToast} deleteToast={deleteToast} setDeleteToast={setDeleteToast}/>
      <ListLotr  setDeleteToast={setDeleteToast}  />
      <MusicPlayerLotr/>
    </div>
  )
}

export default LordofTheRings