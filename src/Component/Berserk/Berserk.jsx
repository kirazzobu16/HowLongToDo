import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import "./PageBerserk.css"
import ThemeBerserk from "./ThemeBerserk"
import HeaderBerserk from "./HeaderBerserk"
import ListBerserk from "./ListBerserk"
import MusicPlayerBerserk from './AudioBerserk/MusicPlayerBerserk'
function Berserk() {
    const [Toast,setToast]=useState("")
    const [deleteToast,setDeleteToast]=useState("")
  return (
    <div className='PageBerserk'>
        <Helmet>
            <title>How Long To Do|Berserk</title>
        </Helmet>
        <ThemeBerserk />
        <HeaderBerserk Toast={Toast} setToast={setToast} deleteToast={deleteToast} setDeleteToast={setDeleteToast}/>
        <ListBerserk  setDeleteToast={setDeleteToast}  />
        <MusicPlayerBerserk/>
    </div>
  )
}

export default Berserk