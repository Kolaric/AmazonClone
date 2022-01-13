import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from"./firebase";
function Login() {

    const history = useHistory();
    const [email, setEmail] =useState('');
    const [password,setPassword] =useState('');
    const signIn = s =>{
        s.preventDefault()
        //some fancy Firebase stuff will happen here
        auth
        .signInWithEmailAndPassword(email,password).
        then(auth =>{
            history.push('/')
        })
        .catch(error =>alert(error.message))
    }
    const register = r =>{
     r.preventDefault();
     
        
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{ 
        //sucessfully created new user with email and password
        console.log({auth});
        if (auth){
            history.push("/")
    }

    })
    .catch(error => alert(error.message))

    }
    
    return (
        <div className="login">
           <Link to="/">
            <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 

          alt=""
        />
        </Link>
        <div className="login__container">
            {/**user inputs */}
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={p => setPassword(p.target.value)}/>
                
                <button type='submit' onClick={signIn} 
                className="login__loginButton">Sign In
                </button>
            </form>
            
            <p>
                By Signing-in you agree to Amazon's CLONE
                Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice
                and our Interest-Based Ads
                Notice.
            </p>
            <button onClick={register}
            className="login__registerButton">Create your amazon Account
            </button>
        </div>
        </div>
    )
}

export default Login
