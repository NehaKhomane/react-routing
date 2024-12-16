import './Style.css'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
export default function Login(){
    useEffect(()=>{
        let userObject=JSON.parse(localStorage.getItem('isLogin'))
        if (userObject!=null){
            if(userObject.role==='Admin'){
                navigate('/admin')

            }else if(userObject.role==='User'){
                navigate('/user')
            }
        }
    },[])
    const roles=['Admin','User']
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors},reset}=useForm()
    const userArray=[
        {
            username:'neha@gmail.com',
            password:'12345',
            fullname:'Neha',
            role:'User'
        },
        {
            username:'sneha@gmail.com',
            password:'23456',
            fullname:'Sneha Khomane',
            role:'User'
        },
        {
            username:'amar@gmail.com',
            password:'6789',
            fullname:' Mr.Abhi',
            role:'Admin'
        },
        {
            username:'rishika@gmail.com',
            password:'6789',
            fullname:'Rishika M',
            role:'Admin'
        },
    ]
    const onLoginClick=(data)=>{
        let status=false
        let i=0
        for(i=0; i<userArray.length;i++){
            if(data.username===userArray[i].username && data.pwd === userArray[i].password && data.role===userArray[i].role){
                status=true
                break
            }
        }
        if(status){
            localStorage.setItem('isLogin',JSON.stringify(userArray[i]))
            if(data.role==='Admin'){
                navigate('/admin')
            }else if(data.role==='User'){
                navigate('/user')
            }
        }else{
            toast.error('Invalid password and Username  !!')
            reset()
        }
    }
    return(
        <>
        <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
          <div className='login-container'>
            <form onSubmit={handleSubmit(onLoginClick)}>
              <div className='title'>
                <h2>Login</h2>
              </div>
              <div className='input-field'>
                <label>Username</label>
                <input type='email'{...register('username',{
                    required:'username is required',
                    pattern:{
                        value:/^\S+@\S+$/i,
                        message:'Invalid username'
                    }
                })}/>
                    {errors.username && <p>{errors.username.message}</p>}
                
              </div>
              <div className='input-field'>
                <label>Password</label>
                <input type='password'{...register('pwd',{
                    required:'password is required',
                    
                })}/>
                    {errors.pwd && <p>{errors.pwd.message}</p>}
                
              </div>
              <div className='input-field'>
                <label>Role</label>
                <select {...register('role',{
                    required:'Role is required'
                })}>
                    <option value=''selected>Select Role</option>
                     {
                        roles.map((item,index)=>{
                            return(
                                <option key={index} value={item}>{item}</option>
                            )
                        })
                     }
                </select>
                {errors.role && <p>{errors.role.message}</p>}
              </div>
              <div className='button-field'>
                <button type='submit'>Login</button>
              </div>
            </form>
          </div>
        
        </>
    )
}