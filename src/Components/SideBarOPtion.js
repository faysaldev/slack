import React from 'react'
import { useDispatch } from 'react-redux';
import { db } from '../firebase';
import {enterRoom} from '../features/appSlice'

function SideBarOPtion({id,Icon, title, addRoom}) {

    const dispatch = useDispatch();

    const addRoomS=()=>{
        var roomname= prompt("Please Enter a name?");
        if(roomname){
            db.collection('room').add({
                RoomName: roomname
            })
        }
    }

    const selectRomm=()=>{
        if(id){
            dispatch(enterRoom({
                roomId: id,
            }))
        }
    }

    return (
        <div className="sidebarOption" onClick={addRoom? addRoomS:selectRomm}>
            {Icon && <Icon fontSize="small" style={{padding:10}}/>}

            {Icon?(<h2>{title}</h2>):(
                <h3><span>#</span> {title}</h3>
            )}
        </div>
    )
}

export default SideBarOPtion
