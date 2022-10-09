import React , {Component, useState} from "react"

function Display({taskProp,removeTask}){
const [isChecked,setIsChecked]= useState(false)
    return(    
    
       <div onClick={()=>setIsChecked(!isChecked)}>        
        <label style={{textDecoration:isChecked===true?"line-through":"none"}} >{taskProp.task} </label>
         <button className="App-del" onClick={()=>removeTask(taskProp.id)}>delete</button>    
        
       </div>)


}

// const Display = ()=> <div

export default Display 