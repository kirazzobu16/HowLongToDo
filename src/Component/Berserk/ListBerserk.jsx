import { UseDo } from '../Context'
import "./ListBerserk.scss"
import "./HeaderBerserk"
import { useEffect} from 'react'




function ListBerserk({setDeleteToast}) {
  
  const {toDoList,setToDoList}=UseDo()
  
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(toDoList))
  },[toDoList])
  
  const Delete=(id)=>{
    
    const delTodo=toDoList.filter((to)=>to.id !==id)
    setToDoList([...delTodo])
    setDeleteToast("show alertdeleteShow")
    
    setTimeout(()=>{setDeleteToast("hide alertdeleteShow")},1000)
  }

  

  const IncreaseHours=(id)=>{
      const updatedTodos = [...toDoList].map((todo) => {
        if (todo.id === id ) {
          ++todo.Hours;
        }
        if (todo.Hours<10){
          todo.level="Novice"
        } 
        else if(todo.Hours>=10&&todo.Hours<2000){
          todo.level="Advanced Beginner"
        }
        else if(todo.Hours>=2000&&todo.Hours<5000){
          todo.level="Intermadiate"
        }
        else if(todo.Hours>=5000&&todo.Hours<10000){
          todo.level="Senior"
        }
        else if(todo.Hours>=10000){
          todo.level="Expert"
        }
        return todo;
      });
      setToDoList(updatedTodos);
      
      
      
          
  }

  const DecreaseHours=(id)=>{
    const updatedTodos = [...toDoList].map((todo) => {
      if (todo.id === id &&todo.Hours ) {
        --todo.Hours;
      }
        if (todo.Hours<10){
          todo.level="Novice"
        } 
        else if(todo.Hours>=10&&todo.Hours<2000){
          todo.level="Advanced Beginner"
        }
        else if(todo.Hours>=2000&&todo.Hours<5000){
          todo.level="Intermadiate"
        }
        else if(todo.Hours>=5000&&todo.Hours<10000){
          todo.level="Senior"
        }
        else if(todo.Hours>=10000){
          todo.level="Expert"
        }
      return todo
    })
    setToDoList(updatedTodos);
  }
  
  const DecreaseMinutes=(id)=>{
    const updatedTodos = [...toDoList].map((todo) => {
      if (todo.id === id &&todo.Minutes>0 ) {
        --todo.Minutes;
      }

      return todo
    })
    setToDoList(updatedTodos); 
  }

  const  IncreaseMinutes=(id)=>{
    const updatedTodos = [...toDoList].map((todo) => {
      if (todo.id === id &&todo.Minutes<59 ) {
        ++todo.Minutes;
      }
      else if(todo.id === id && todo.Minutes>=59) {
        todo.Minutes=0
        ++todo.Hours 
      }
      if (todo.Hours<10){
        todo.level="Novice"
      } 
      else if(todo.Hours>=10&&todo.Hours<2000){
        todo.level="Advanced Beginner"
      }
      else if(todo.Hours>=2000&&todo.Hours<5000){
        todo.level="Intermadiate"
      }
      else if(todo.Hours>=5000&&todo.Hours<10000){
        todo.level="Senior"
      }
      else if(todo.Hours>=10000){
        todo.level="Expert"
      }
      return todo
    })
    setToDoList(updatedTodos);  
  }
  
 
  return (
    <div className='container Berserk'>    
          {
              toDoList.map((item)=>(              
            <div className='list' >                        
                  <li className='flex' >
                      <span className='box todo' key={item.id}><p>{item.toDo}</p> </span>
                      <div className='Time box'>
                        <button onClick={()=>DecreaseHours(item.id)}>-</button>
                        <p>{item.Hours} HOURS</p>
                        <button onClick={() => IncreaseHours(item.id)}>+</button>
                      </div>
                      <div className='Time box'>
                        <button onClick={()=>DecreaseMinutes(item.id)} >-</button>
                        <p> {item.Minutes} MINUTES</p>
                        <button onClick={()=>IncreaseMinutes(item.id)}>+</button>
                      </div>
                      <span className='box'><p>{item.level}</p></span>
                      <button onClick={()=>Delete(item.id)}>DELETE</button>                             
                  </li>   
            </div>
              ))             
          }          
    </div>
  )
  
}

export default ListBerserk

