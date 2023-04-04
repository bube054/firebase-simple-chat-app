import React, { useState, useRef } from 'react'
// import "./App.css"
import Auth from "./components/Auth"
import Cookies from 'universal-cookie'
import Chat from './components/Chat'
const cookies = new Cookies()

const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef(null)

  if(!isAuth) {
    return (
      <Auth auth={setIsAuth}/>
    )
  }

  return (
    <div>
      {room ? <Chat room={room}/> : <div className='room'>
        <label className=''>Enter Room Name!</label>
        <input ref={roomInputRef}/>
        <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
      </div>}
    </div>
  )
}

export default App