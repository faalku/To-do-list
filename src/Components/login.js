import React from "react";

function Login(){

     function login(){
        const user = {
          id: new Date(),
          email: email,
          password: password,
        }
    }
    return (
       <div>
          <p>Log in page</p>
          <label>username: </label>
          <input type={"email"} value={mail}></input>
          <label>password: </label>
          <input type={"password"} value={password}></input>
          <a> Do you have an account ?</a>
          <a> <Link to="/login">Log in</Link></a>
          <button onClick={login}>log in</button>
      </div>
    );
}
export default Login;






