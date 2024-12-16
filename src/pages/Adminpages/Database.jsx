import { NavLink } from 'react-router-dom'
import './Database.css'
export default function Database(){
    const workExperiences =localStorage.getItem('workExperiences')? JSON.parse(localStorage.getItem('workExperiences')):[]
    
    return(
        <>
        <div className=' view-container'>
            <div className='title'>
                <h2>Audiendence Data</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>sr no</th>
                    <th>Fullname</th>
                    <th>Email Address</th>
                    <th>Mobile No</th>
                    <th>tickit type</th>
                    <th>Date</th>
                    <th>Payment type</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    workExperiences.length===0 ?(
                        <tr>
                            <td colSpan='6'> No Records Available</td>
                        </tr>
                    ):(
                        workExperiences.map((item,index)=>{
                        return(
                            <tr key={index}>
                                 <td>{index+1}</td>
                                 <td>{item.myname}</td>
                                <td>{item.emailAdress}</td>
                                <td>{item.mobile}</td>
                                <td>{item.tickit}</td>
                                <td>{item.end_date}</td>
                                <td>{item.payment}</td>
                                
                            </tr>
                        )
                    })
                )
                   }
                </tbody>
            </table>
        </div>
        </>
    )
}