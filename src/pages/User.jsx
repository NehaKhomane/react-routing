import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Style.css';
import { useEffect } from 'react';

export default function User(){
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('isLogin')){
            navigate('/')
        }
    },[])
    const logout=()=>{
        localStorage.removeItem('isLogin')
        navigate('/')
    }
    return(
        <>
        <div className=' headers'>
            <h2>Welcome,{ JSON.parse(localStorage.getItem('isLogin')).fullname}</h2>
            <div className='links'>
                <NavLink to='dashboards'>Upcoming Event</NavLink>
                <NavLink to='details'>Live Event</NavLink>
                <NavLink to='views'>Events</NavLink>
                <NavLink to='upcomingevent'>Book Tickits</NavLink>
               
                
                <button onClick={logout}>Logout</button>
            </div>
        </div>
        <Outlet/>
        </>
    )
}