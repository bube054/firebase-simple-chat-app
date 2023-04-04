import React, { useEffect, useState } from "react";
import {addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy} from "firebase/firestore"
import { db, auth } from "../firebase-config";
import "../styles/Chat.css"

const Chat = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([])

  const messagesRef = collection(db, "messages")

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newMessage);
    if(newMessage === "") return
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: props.room
    })

    setNewMessage("")
  };

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", props.room), orderBy("createdAt"))

    const unsuscribe = onSnapshot(queryMessages, (snapShot) => {
      console.log("new message was created");
      let messages = []
      snapShot.forEach(doc => {
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages)
    })

    return () => unsuscribe()
  }, [])

  return (
    <div className="chat-app">
      <div className="header">
        <h1 className="">welcome to: {props.room}</h1>
      </div>
      <div className="messages" >
        {messages.map((message) => <div className="message" key={message.id}>
          <span className="user">{message.user}:</span>
          {message.text}
        </div>)}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          value={newMessage}
          className="new-message-input"
          placeholder="Type your message here..."
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="send-button" type="submit">
          send
        </button>
      </form>
    </div>
  );
};

export default Chat;
