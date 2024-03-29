
import "./HeaderClassic.css"
import { UseDo } from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faXmark} from '@fortawesome/free-solid-svg-icons'
import "./ToastClassic.scss"


function HeaderClassic({Toast,setToast,deleteToast,setDeleteToast}) {
   const {toDoList,setToDoList,toDo,setTodo}=UseDo()
   const AddList=(e)=>{
    e.preventDefault()
    
    if(toDo!=="" &&toDo.length<=25) {
       
      setToDoList([...toDoList, {id:`${toDo}-${Date.now()}`,toDo,Hours:0,Minutes:0,level:"Novice"}])
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
     
    <div className='HeaderClassic'>
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
          <div className='inputClassic'>
            <input type="text" value={toDo} placeholder='Write What You Want to Do' onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={(e)=>AddList(e)} >Click</button>         
          </div>
    </div>
    
  )
}

 


export default HeaderClassic