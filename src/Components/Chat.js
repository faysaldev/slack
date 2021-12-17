import React, { useState,useRef } from 'react'
import './Chat.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import {Button} from '@material-ui/core'
import { db } from '../firebase';
import { selectRoom} from '../features/appSlice'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import firebase from 'firebase'
import ChatMessages from './ChatMessages'
import {selectUser} from '../features/userSlice'
import FlipMove from 'react-flip-move';

function Chat() {

    const userSelector = useSelector(selectUser);
    
    const user = userSelector.user;

    const chatRef = useRef(null);

    const selectRooms = useSelector(selectRoom);



    const [roomMessage,setRoomMessage] =useState([]);

    const [roomName,setRoomname] =useState("");

    const [input,setInput] =useState('');
    const sendMessage=(e)=>{
        e.preventDefault();

        db.collection('room').doc(selectRooms).collection('message').add({
          message: input,
          userImg:user.photoURL,
          userName:user.displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        });

        setInput('')
    }

    useEffect(()=>{

        db.collection("room").doc(selectRooms).onSnapshot(snapshot=>{
            setRoomname((snapshot.data()))
        })

        db.collection('room').doc(selectRooms).collection('message').orderBy("timestamp","asc").onSnapshot((snapshot)=>{
            setRoomMessage(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            })))
        })


        chatRef?.current?.scrollIntoView({
            behavior: 'smooth',
        });
    },[selectRooms])



    return (
        <div className="chat">
            <div className="chat__header" style={{position:"sticky", top:"0",zIndex:"10000",background:"white"}}>
                <div className="chatHeader__left">
                    <h4><strong># {roomName?.RoomName}</strong></h4>
                    <StarBorderIcon />
                </div>
                <div className="chatHeader__right">
                    <p><InfoIcon /> Details</p>
                </div>
            </div>

          <FlipMove className="messagess">
          {roomMessage.map(({id,data})=>(
                <ChatMessages chatRef={chatRef} key={id} id={id} data={data}/>
            ))}
            <div className="scrool__toBottom" ref={chatRef}/>
          </FlipMove>
            
            <div className="chat__input">
                <form>
                    <input value={input} onChange={e=> setInput(e.target.value)} type="text" placeholder={`Message in ${roomName?.RoomName} Room`} />
                    <Button disabled={!input} hidden type="submit" onClick={sendMessage}>SEND</Button>
                </form>
            </div>
        </div>
    )
}

export default Chat
