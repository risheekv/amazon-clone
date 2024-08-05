import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
          history.push('/')
        })
        .catch(error => alert(error.message))

    //some fancy firebase login stuff yeahh!!
  }

  const register = e => {
    e.preventDefault();

    //some fancy firebase register stuff !!!
    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
           //successfully logged in
           console.log(auth)
           history.push('/')
        })
        .catch(error => alert(error.message))
  }
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>

      <div className='login__container'>
        <h1>Sign-In</h1>

        <form>
            <h5>Email</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>

        <p>
            By Signing in, you agree to accept all the terms of Racuez industries. Read all terms and conditions here.
        </p>

        <button type='submit' onClick={register} className='login__registerButton'>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login
