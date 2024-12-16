
import './Viewconcert.css'
export default function Viewconcert(){
    const certifications=localStorage.getItem('certifications')? JSON.parse(localStorage.getItem('certifications')):[]
    
    return(
        <>
        <div className=' view-containers'>
            <div className='title'>
                <h2>Events</h2>
            </div>
        
               <div className='Newconcert'>
              <div className='first'>
              <h3>Concert Name:</h3>
               <h3>Oraganizer Name:</h3>
               <h3> Live Concert Date:</h3>
               <h3>Event StartTime:</h3>
               <h3>Concert EndTime:</h3>
               <h3> Concert Location:</h3>
              </div>
                
                 <div className='second'>
                 {
                    certifications.length===0 ?(
                        
                            <p> Nothing Available</p>
                        
                    ):(
                        certifications.map((item,index)=>{
                        return(
                            <h4>
                                 
                                 <p>{item.concert_name}</p>
                                <p>{item.org_name}</p>
                                <p>{item.concert_date}</p>
                                <p>{item.start_time}</p>
                                <p>{item.end_time}</p>
                                <p>{item.concert_location}</p>
                                
                                
                            </h4>
                        )
                    })
                )
                   }
                 </div>
                
               </div>
            
        </div>
        </>
    )
}