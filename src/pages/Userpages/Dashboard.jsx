import './Dashboard.css';
import { useState } from 'react'


export default function Dashboard(){

    const [events,setEvents] = useState([
        {
            image:'https://i.pinimg.com/736x/d4/31/a3/d431a3a715572fc55fabc0a9ecfc02f7.jpg',
            month:'October',
            date:'30',
            year:'2024',
            stadium:'Marvel Stadium',
            place:'Melbourne',
            isBook:false
        },
        {
            image:'https://i.pinimg.com/564x/d3/f2/29/d3f2296ee7b7691a6d666d2e25facc92.jpg',
            month:'November',
            date:'6',
            year:'2024',
            stadium:'Accor Stadium',
            place:'Sydney',
            isBook:true
        },
        {
            image:'https://i.pinimg.com/564x/94/d4/c0/94d4c0d19b17bdeca400ba7fb21a2d7e.jpg',
            month:'January',
            date:'9',
            year:'2025',
            stadium:'Zayed Sports City Stadium',
            place:'Abu Dhabi',
            isBook:false
        },
        {
            image:'https://i.pinimg.com/736x/06/51/e2/0651e2927350a4e78d8edbc188b2c7a6.jpg',
            month:'January',
            date:'18',
            year:'2025',
            stadium:'D Y Patil Stadium',
            place:'Mumbai',
            isBook:true
        },
        {
            image:'https://i.pinimg.com/564x/0c/26/1a/0c261a56b2d3819895e813898cc75f09.jpg',
            month:'April',
            date:'9',
            year:'2025',
            stadium:'Kai Tak Stadium',
            place:'Hong Kong',
            isBook:false
        },
        {
            image:'https://i.pinimg.com/564x/6e/ad/38/6ead38a1307399ae07ef14dda69f96cb.jpg',
            month:'April',
            date:'16',
            year:'2025',
            stadium:'Goyang Stadium',
            place:'Seoul',
            isBook:true
        }
    ])

    return(
        <>
            <div className="events-container">
               
                {
                    events.map((event,key) => {
                        return(
                            <div className="cards">
                                <img src={event.image} alt="image not found"></img>
                                <div className="dates">
                                    <p>{event.month} <span>{event.date}</span></p>
                                    <p>{event.year}</p>
                                </div>
                                <div className="location">
                                    <p><span>{event.stadium}</span></p>
                                    <p>{event.place}</p>
                                </div>
                                <button className={event.isBook ? 'book' : 'sold-out'}>{event.isBook ? 'Get Ticket' : 'Sold Out'}</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}