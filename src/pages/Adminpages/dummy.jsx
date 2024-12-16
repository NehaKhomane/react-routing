import { useNavigate } from 'react-router-dom'
import './Database.css'
import { useEffect } from 'react'
export default function Dummy(props){
    const navigate=useNavigate()
    const{Component}=props
    useEffect(()=>{
        if(!localStorage.getItem('isLogin')){
            navigate('/login')
        }
    },[])
    return(
        <>
        
        <Component></Component>
        </>
    )
}