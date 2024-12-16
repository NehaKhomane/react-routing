import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Style.css';
import { useEffect } from 'react';

export default function Admin(){
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
            <h2>Welcome , { JSON.parse(localStorage.getItem('isLogin')).fullname}</h2>
            <div className='links'>
                <NavLink to='databases'>Database</NavLink>
                <NavLink to='events'>Consert Ratio</NavLink>
                <NavLink to='records'>Create Consert</NavLink>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
        <Outlet/>
        </>
    )
}