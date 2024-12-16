import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import './Records.css'
import { useEffect, useState } from 'react'


export default function Records(){

    const {register,handleSubmit,formState:{errors},reset} = useForm()

    const [certifications,setCertifications] = useState( localStorage.getItem('certifications') != null ? JSON.parse(localStorage.getItem('certifications')) : [])
    // const [certifications, setCertifications] = useState([{ certificationTitle: '', issuingOrganization: '', issueDate: '', expirationDate: '', description: '' }])

    useEffect(() =>{
        localStorage.setItem('certifications',JSON.stringify(certifications))
    },[certifications])

    const onAddCertificate=(data) =>{
        // console.log(data)
        setCertifications([
            ...certifications,
            data
        ])
        reset()
        toast.success('Event Created successfully !!!')
    }

    return(
        <>
            <div className="Certifications-container">
                <div className="title">
                    <h2>Create an Concert</h2>
                </div>
                <form onSubmit={handleSubmit(onAddCertificate)}>
                    <div className="input-fields">
                        <label>Concert Name</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('concert_name',{
                                        required:'Concert Name is required !'
                                    })
                                }
                            ></input>
                            { errors.concert_name && <p>{errors.concert_name.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label> Organizer Name</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('org_name',{
                                        required:'Organization Name is required !'
                                    })
                                }
                            ></input>
                            { errors.org_name && <p>{errors.org_name.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Concert Date</label>
                        <div className="field">
                            <input 
                                type="date" 
                                {
                                    ...register('concert_date',{
                                        required:'Consert Date is required !'
                                    })
                                }
                                
                            ></input>
                            { errors.concert_date && <p>{errors.concert_date.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Concert Start Time</label>
                        <div className="field">
                            <input 
                                type="time" 
                                {
                                    ...register('start_time',{
                                        required:'Consert Start Time is required !'
                                    })
                                }
                                
                            ></input>
                            { errors.start_time && <p>{errors.start_time.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Concert End Time</label>
                        <div className="field">
                            <input 
                                type="time" 
                                {
                                    ...register('end_time',{
                                        required:'Consert end Time is required !'
                                    })
                                }
                                
                            ></input>
                            { errors.end_time && <p>{errors.end_time.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Concert Location</label>
                        <div className="field">
                            <input 
                                type="text" 
                                {
                                    ...register('concert_location',{
                                        required:'Consert Location is required !'
                                    })
                                }
                                
                            ></input>
                            { errors.concert_location && <p>{errors.concert_location.message}</p>}
                        </div>
                    </div>
                
                    <button type='submit'>Add Consert</button>
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