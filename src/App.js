import React, {useState, useEffect, useRef} from "react"
import './App.css';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';
// COMPONENTS
import Messagecomp from './components/Messagecomp';
import db from './config/config'
import firebase from "firebase"
import FlipMove from "react-flip-move"

// RICKROLL
// import {Redirect} from "react-router-dom";




function App() {


  // STATES
  // State for message input
  const [input,setInput] = useState("");
  // State to store all the messages
  const [messages, setMessages] = useState([]);
  // State for usernames
  const [username, setUsername] = useState('');
  
  //  Message on PRESS PUSH MESSAGES INTO THE DATABASE
  const msgbtn=(event)=>{
    event.preventDefault();

    db.collection('messages').add({
      text:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setMessages([...messages,{username:username, text:input}]);
    setInput('');
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

  }

  useEffect(()=>{
    db.collection('messages').orderBy("timestamp", "asc").onSnapshot(data=>{
      setMessages(data.docs.map(doc=> ({id:doc.id, data:doc.data()})))
    })
},[]);



  // PROMPT
  useEffect(() => {
    setUsername(prompt("Enter your name"))
  },[]);

  const messageRef = useRef();

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  })

  return (

    <div className="App">
      <h1 className="marker" id="big">Chat Room</h1>
      <h3 className="marker" id="small">Welcome {username}</h3>

      <form>
        <FormControl className="hello">
          <InputLabel className="inp-lab">Enter a Message</InputLabel>
          <Input className="inp-val" value={input} onChange={event=>{
          setInput(event.target.value)
        }}/>
        </FormControl>
        <Button className="btn" disabled={!input || !username || username===""} color="primary" variant="contained" type="submit" onClick={msgbtn}>Send</Button>
      </form>

      <FlipMove>
        {
          messages.map(({id,data})=>(
            <Messagecomp key={id} username={username} message={data}/> 
            
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
