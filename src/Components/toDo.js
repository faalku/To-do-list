import React, {useState} from 'react';
import Display from './Display'
import '../App.css'


function Todo(){

    let orginalList = []
    const [ tasks , setTasks ] = useState ( orginalList ) //change the whole list 
    const [task,setTask] = useState("") //to change the input
   // const [ checktask , setcheck] = useState (false) .

    function addTask(){ 
      const newTask = {
        id: new Date(),
        task:task,
        isChecked: false, }
    setTasks([...tasks, newTask])
    }
      // let newTasks = tasks; 
      // newTasks.push(task) 
      // setTasks(newTasks)
      // console.log(tasks);
  
      // Destructuring. 
      // const person  = {
      //   name:"ammar",
      // }
  
      // const employee = {
      //   salary:1
      // }
      // console.log({...person, ...employee})
  
    function delTask(id){
      const dellist = tasks.filter(task=> task.id !== id )
      // dellist.filter(task => "a"==title );
      setTasks(dellist) }
    
    ///function doneTask(id){  
    //const doneTask = tasks.map(task=> task.id == id ){}
    // setTasks(...tasks,donetask)
    //}
    
    function deleteAll (){
      setTasks([]) }
    
    
     // function checkStroke (id){
     // const doneTasks = tasks;
      // doneTasks.map(task=> task.id=== id (task.isChecked=true ))
      //1
     // doneTasks.map(task=> {
      //  if(task.id===id){
       //   task.isChecked = true
      //  }
    //  } )
    //  }
   // function Checked() {
      //const checkTasks = tasks;
      //checkTasks.map(task=> task.id=== id ) 
     // setcheck 
      
  
      //   } 
      //   if (checkBox.checked == true){
      //   setTask(...tasks,task.strikethrough{)
      //   } else 
      //   setTask(...tasks,task)

     /* const toggleComplete = (id) => {
        setTasks(
          tasks.map(task => (
            task.id === id ? { ...task, completed: !task.completed } : task
          ))
        )
      }*/

      function Checked(id) {
       const checkTasks = tasks ; 
       checkTasks.map(task =>  task.id=== id (task.isChecked=true ))
       setTasks([])

      }

    return (  
     <div className="App">
    <header className="App-header"><a>To do list</a></header>
    
     <input onChange={(ob)=>setTask(ob.target.value)} value={task} type="text" placeholder='what do u need to do?'></input> 
     <button onClick={addTask} className="App-buttonadd"> + </button>
     
    
    {tasks.map((task)=>
     <Display removeTask = {(id)=>delTask(id)} taskProp={task}/>
    )}
    

      <br></br>
      <button type="clear" value="clear" className="App-clear"onClick={deleteAll}> clear All </button>
      
     </div>
    )

}

export default Todo; 