import React, { useEffect,forwardRef } from 'react'

const ChatMessages=forwardRef(({id,data,chatRef},ref) =>{

useEffect(()=>{
    chatRef?.current?.scrollIntoView({
        behavior: 'smooth',
    });
},[id])

    const {message,userImg,userName,timestamp} = data;

    return (
        <div className="message" ref={ref}>
            <img src={userImg} />
            <div className="message__info">
                <h4>{userName} <span>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>

                <p>{message}</p>
            </div>
        </div>
    )
})

export default ChatMessages
