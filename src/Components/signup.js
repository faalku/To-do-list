import React from "react";
//import app.css from "app"

let allUsers = []
const [ users , setUsers ] = useState ( allUsers)
const [ user,setUser ]= useState("")

function Signup(){
    const newUser = {
        id: new Date(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }
    setUsers ([...users,newUser])
    return(
    <div>
          <p>Sign up page</p>
          <input type={"text"} value={firstName} placeholder="first Name"></input>
          <input type={"text"} value={lastName} placeholder="first Name"></input>
          <input type={"email"} value={email} placeholder="first Name"></input>
          <input type={"password"} value={password}></input>
          <a></a>
          <button onClick={login}>log in</button>
      </div>






    )





}
export default Signup;
