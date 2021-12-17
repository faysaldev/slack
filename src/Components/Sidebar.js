import React,{useEffect,useState} from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOPtion from './SideBarOPtion';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { db } from '../firebase';
import {selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux';




function Sidebar() {

    const userSelector = useSelector(selectUser);

    const user = userSelector.user;
    const [roomName,setRoomName] =useState([]);

    useEffect(()=>{
        db.collection('room').onSnapshot((snapshot)=>{
           setRoomName(snapshot.docs.map((doc)=>({
               id: doc.id,
               data:doc.data()
           })))
        })
    },[])

    return (
        <div className="sidbar">
           <div className="sidbar__header">
            <div className="sidbarHeader__info">
            <h2>Faysal HQ</h2>
            <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
            </h3>
            </div>

            <CreateIcon className="chekIcon" />

           </div>

           <SideBarOPtion Icon={FiberManualRecordIcon} title="Threads" />
           <SideBarOPtion Icon={InboxIcon} title="Mentions & Reactions" />
           <SideBarOPtion Icon={DraftsIcon} title="Saved Items" />
           <SideBarOPtion Icon={BookmarkBorderIcon} title="Channel Browser" />
           <SideBarOPtion Icon={PeopleAltIcon} title="People & user proups" />
           <SideBarOPtion Icon={AppsIcon} title="Apps" />
           <SideBarOPtion Icon={FileCopyIcon} title="File browser" />
           <SideBarOPtion Icon={ExpandLessIcon} title="Show less" />
           <hr />
           <SideBarOPtion Icon={ExpandMoreIcon} title="Show More" />
           <hr />
           <SideBarOPtion addRoom Icon={AddIcon} title="Add Channel" />

            {roomName?.map(({id,data})=>(
           <SideBarOPtion key={id} id={id}title={data.RoomName} />
            ))}

        </div>
    )
}

export default Sidebar
