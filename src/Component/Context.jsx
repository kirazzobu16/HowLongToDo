
import { createContext,useContext,useState} from "react"
import React from 'react'



const DoContext=createContext()
const getLocalTimes=()=>{
    let list =localStorage.getItem("list")
    if (list){
        return JSON.parse(localStorage.getItem("list"))
    } else {
        return []
    }

}


export const DoProvider=({children})=>{

    const [toDoList,setToDoList]=useState(getLocalTimes())
    
    const [toDo,setTodo]=useState("")
    
    

    const[event,setEvent]=useState(true)
    
    const[deleteEvent,setDeleteEvent]=useState(false)
    const values={
        toDoList,
        setToDoList,

        toDo,
        setTodo,
        event,
        setEvent,
        deleteEvent,
        setDeleteEvent
    }

    return <DoContext.Provider value={values}>{children}</DoContext.Provider>
}

export const UseDo=()=>useContext(DoContext)