import React from 'react'
import "./HeaderStarWars.scss"
import { UseDo } from '../Context'
import "./ToastStarWars.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faXmark} from '@fortawesome/free-solid-svg-icons'




function HeaderStarWars({Toast,setToast,deleteToast,setDeleteToast}) {
   const {toDoList,setToDoList,toDo,setTodo}=UseDo()

   const AddList=(e)=>{
    e.preventDefault()
    
    if(toDo!=="" &&toDo.length<=25) {
       
      setToDoList([...toDoList, {id:`${toDo}-${Date.now()}`,toDo,Hours:198,Minutes:0,level:"Amatör"}])
      setTodo("")
      
      setDeleteToast("hidden")
      setToast("show alertShow")
      setTimeout(()=>{setToast("hide alertShow")},1000)
    }
     else if(toDo.length>25){
      alert("You can't write more than 25 words");
      setTodo("") 
    }    
   }
   
   const DeleteAddToast=()=>{
    setToast("alertShow hide")
    
   }

   const DeleteDeleteToast=()=>{
    setDeleteToast("alertdeleteShow hide")
   }
  


  return (
     
    <div className='StarWars'>
           {/*when add your list  */}
          <div className={`alert ${Toast}`}>
            <span className='icon'>
              <FontAwesomeIcon className='check' icon={faCheck} />
            </span>
              <span className='info'>You Added The List</span>    
              <FontAwesomeIcon onClick={()=>DeleteAddToast()} className='close' icon={faXmark} />                               
          </div> 

          {/* when delete your list */}

          <div className={`delete ${deleteToast}`}>
            <span className='iconDelete'>
              <FontAwesomeIcon className='checkDelete' icon={faCheck} />
            </span>
              <span className='infoDelete'>You Deleted The List</span>    
              <FontAwesomeIcon onClick={()=>DeleteDeleteToast()} className='closeDelete' icon={faXmark} />                               
          </div> 

        <h1>How Long To Do</h1> 
          <div className='input'>
            <input type="text" value={toDo} placeholder='Write What You Want to Do' onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={(e)=>AddList(e)} >Click</button>         
          </div>
    </div>
    
  )
}

 


export default HeaderStarWars