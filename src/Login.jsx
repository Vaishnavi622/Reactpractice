import {useState} from "react";
import users from "./data/Users.js";

 function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin =()=>{
        const user= users.find((user)=>user.email===email && user.password===password);
        if(user){
            alert("login successfull");
        }
        else{
            alert("invalid email or password");
        }
        
    }
    return(
        <div className="text-blue-500">
            <h1 className="text-blue-500 text-3xl "> Login </h1>
            <h3>Email</h3>
            <input placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <h3>Password</h3>
            <input placeholder="enter your password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleLogin}>Login</button> 
        </div>
    )
}

export default Login;