import React from 'react'
import {Avatar} from '@material-ui/core'
import './Header.css'
import ScheduleIcon from '@material-ui/icons/Schedule';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {selectUser} from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import {userlogout} from '../features/userSlice'
import { auth } from '../firebase';


function Header() {

    const dispatch = useDispatch();

    const userSelector = useSelector(selectUser);

    const user = userSelector.user;

    const singout=()=>{
        auth.signOut().then(()=>{
            dispatch(userlogout());
        })
    }

    return (
        <div className="header">
            <div className="header__left">
                <Avatar onClick={singout} className="avatar" src={user.photoURL} />
                <ScheduleIcon className="watch" />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search in Slack" />
            </div>

            <div className="header__right">
                <HelpOutlineIcon />
                </div>
        </div>
    )
}

export default Header
