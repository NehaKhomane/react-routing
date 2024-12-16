import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import './style.css'
import { useEffect, useState } from 'react'


export default function UpcomingEvent(){
    const tickits=['premium','gold','Business','VIP']
    const payments=['google pay','Phone Pay','card','cash']
    const {register,handleSubmit,formState:{errors},reset} = useForm()

    const [workExperiences,setWorkExperiences] = useState( localStorage.getItem('workExperiences') != null ? JSON.parse(localStorage.getItem('workExperiences')) : [])
    // const [workExperiences, setWorkExperiences] = useState([{ jobTitle: '', companyName: '', location: '', startDate: '', endDate: '', jobDescription: '' }])

    useEffect(() =>{
        localStorage.setItem('workExperiences',JSON.stringify(workExperiences))
    },[workExperiences])

    const onAddExperiance=(data) =>{
        // console.log(data)
        setWorkExperiences([
            ...workExperiences,
            data
        ])
        reset()
        toast.success('Data added successfully !!!')
    }

    return(
        <>
            <div className="experiance-container">
                
                <form onSubmit={handleSubmit(onAddExperiance)}>
                    <div className="input-fields">
                        <label>Full Name</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('myname',{
                                        required:'full  name is required !'
                                    })
                                }
                            ></input>
                            { errors.myname && <p>{errors.myname.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Mobile No</label>
                        <div className="field">
                            <input 
                                type="number"
                                {
                                    ...register('mobile',{
                                        required:'Mobile No is required !'
                                    })
                                }
                            ></input>
                            { errors.mobile && <p>{errors.mobile.message}</p>}
                        </div>
                    </div>
                    <div className='input-fields'>
                <label> Email Address</label>
                <div className="field">
                    <input type='email'{...register('emailAdress',{
                        required:'Email Address is required',
                        pattern:{
                            value:/^\S+@\S+$/i,
                            message:'Invalid Email address'
                        }
                    })}></input>
                    {errors.emailAdress && <p>{errors.emailAdress.message}</p>}
                </div>
            </div>
                    <div className="input-fields">
                        <label>Password</label>
                        <div className="field">
                            <input 
                                type="password"
                                {
                                    ...register('pwd',{
                                        required:'password is reqired !'
                                    })
                                }
                                
                            ></input>
                            { errors.pwd && <p>{errors.pwd.message}</p>}
                        </div>
                    </div>
                    <div  className='input-fields'>
                    <label> Tickit type</label>
                   <div className="field">
                        <select {...register('tickit',{
                        required:' tickit type is required..!!'
                    })}>
                        <option value='' selected>Select tickit</option>
                        {
                            tickits.map((item,key)=>{
                                return(
                                    <option value={item} key={key}>{item}</option>
                                )
                            })
                        }
                    </select>
                    {errors.tickit && <p>{errors.tickit.message}</p>}
                   </div>
                </div>
                    <div className="input-fields">
                        <label>Select Date</label>
                        <div className="field">
                            <input 
                                type="date"
                                {
                                    ...register('end_date',{
                                        required:'date is required !'
                                    })
                                }
                            ></input>
                            { errors.end_date && <p>{errors.end_date.message}</p>}
                        </div>
                    </div>
                    <div  className='input-fields'>
                    <label> Payment Type</label>
                   <div className="field">
                        <select {...register('payment',{
                        required:'Payment type is required..!!'
                    })}>
                        <option value='' selected>Select Payment Mode</option>
                        {
                            payments.map((item,key)=>{
                                return(
                                    <option value={item} key={key}>{item}</option>
                                )
                            })
                        }
                    </select>
                    {errors.payment && <p>{errors.payment.message}</p>}
                   </div>
                </div>
                   
                    <button type='submit'>Submit</button>
                </form>
            </div>

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
        </>
    )
}