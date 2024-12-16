import { NavLink, Outlet } from 'react-router-dom';
import './Home.css';


export default function Home(){
    
    return(
        <>
        <div className=' headers'>
        <img src='download.png' alt='logo' height='50px'></img>
            <div className='links'>
                <NavLink to='home'></NavLink>
                <NavLink to='mainhome'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='gallary'>Gallery</NavLink>
                <NavLink to='price'>Price</NavLink>
                <NavLink to='login'>Login</NavLink>
             </div>
        </div>
        <Outlet/>
        </>
    )
}