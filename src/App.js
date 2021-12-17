import React,{useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Components/Login'
import { auth } from './firebase';
import { userData } from './features/userSlice';
import Spinner from 'react-spinkit'




function App() {

    const userSelector = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(()=>{
      auth.onAuthStateChanged(user =>{
        if(user){
          dispatch(userData({user}));
        }
      })
    },[])

    window.addEventListener("load",()=>{
      document.querySelector('.preloader').classList.add('none')
    })

  return (
    <div className="app">

    <div className="preloader">
        <div className="preloader__contant">
          <img src="/logo.jpg" alt="" />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none"/>
        </div>
    </div>

      {!userSelector?(<Login />):(
        <>
        <Header />

        <div className="app__body">
        <Sidebar />
        <Chat />
        </div>
        </>
      )}
    </div>
  );
}

export default App;
