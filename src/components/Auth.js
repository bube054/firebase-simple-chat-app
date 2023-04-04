import React from 'react'
import "../styles/Auth.css"
import { auth, googleProvider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Auth = (props) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      cookies.set("auth-token", result.user.refreshToken)
      props.auth(cookies.get("auth-token", result.user.refreshToken))
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className='auth'>
      <p className=''>Sign in with google to continue</p>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Auth