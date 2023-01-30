import React from 'react'
import { Helmet } from 'react-helmet'
import ThemeStarWars from "./ThemeStarWars"
import "./PageStarWars.css"
import HeaderStarWars from "./HeaderStarWars"
import ListStarWars from "./ListStarWars"
import MusicPlayerStarWars from "./AudioStarWars/MusicPlayerStarWars"
import { useState } from 'react'

function StarWars() {
    const [Toast,setToast]=useState("")
    const [deleteToast,setDeleteToast]=useState("")
  return (
    <div className='PageStarWars'>
        <Helmet>
            <title>How Long To Do|Star Wars</title>
        </Helmet>
        <ThemeStarWars />
        <HeaderStarWars Toast={Toast} setToast={setToast} deleteToast={deleteToast} setDeleteToast={setDeleteToast}/>
        <ListStarWars  setDeleteToast={setDeleteToast}  />
        <MusicPlayerStarWars/>
    </div>
  )
}

export default StarWars