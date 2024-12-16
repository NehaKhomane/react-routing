import './Home.css'
import {  NavLink } from 'react-router-dom';
export default function Home(){
    return(
        <>
         <div className='head'>
      <img src='download.png' alt='neha' height='50px'></img>
      <div className='links'>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='service'>Gallery</NavLink>
        <NavLink to='contact'>Price</NavLink>
       
        </div></div>
      
         <div className='Boxes'>
   <div className='box'>
    <h1><i>MUSIC OF THE SPERES..<br>
    </br>Creative Reunion In Boston</i> </h1>
   </div>
   </div>
        </>
    )
}