import { useState } from 'react';
import './Gallary.css';
export default function Gallary(){
    const [products,setProducts]=useState([
        {
            image:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7bf8ca10799325.560eb594d390e.JPG',
            title:'coldplay spheres tour',
           
        },
        {
            image:'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
            title:'beyoncé renaissance ',
            
        },
        {
            image:'https://images.pexels.com/photos/3245295/pexels-photo-3245295.jpeg',
            title:'Bowie Stardust',
            
        },
        {
            image:'https://images.pexels.com/photos/28653607/pexels-photo-28653607/free-photo-of-close-up-of-a-shiny-gold-saxophone-instrument.jpeg',
            title:'Rolling Stones North',
           
        },
        {
            image:'https://images.pexels.com/photos/28640122/pexels-photo-28640122/free-photo-of-close-up-of-a-silver-flute-on-a-dark-background.jpeg',
            title:'Coachella',
           
        },
        {
            image:'https://images.pexels.com/photos/28581340/pexels-photo-28581340/free-photo-of-vibrant-nightlife-concert-scene-with-mobile-capture.jpeg',
            title:'Rolling North'
        }
        

    ])
    const [product1,setProduct1]=useState([
        {
            image:'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg',
            title:'Lilith Fair',
           
        },
        {
            image:'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg',
            title:'Tomorrowland',
            
        },
        {
            image:' https://images.pexels.com/photos/442540/pexels-photo-442540.jpeg',
            title:'Michael Jackson',
            
        },
        {
            image:'https://images.pexels.com/photos/213207/pexels-photo-213207.jpeg',
            title:'Arjit Singh',
           
        },
        {
            image:'https://images.pexels.com/photos/28640122/pexels-photo-28640122/free-photo-of-close-up-of-a-silver-flute-on-a-dark-background.jpeg',
            title:'Swarrang 2024',
           
        },
        {
            image:'https://images.pexels.com/photos/28581340/pexels-photo-28581340/free-photo-of-vibrant-nightlife-concert-scene-with-mobile-capture.jpeg',
            title:'New Year Festive',
            
        }
        

    ])
    const [product2,setProduct2]=useState([
        {
            image:'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
            title:'Birthday Blast',
           
        },
        {
            image:'https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg',
            title:'Lilith Fair',
            
        },
        {
            image:' https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg',
            title:'music festival',
            
        },
        {
            image:'https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg',
            title:'solely of female',
        },
        {
            image:'https://images.pexels.com/photos/167478/pexels-photo-167478.jpeg',
            title:'radio station',
           
        },
        {
            image:'https://images.pexels.com/photos/28581340/pexels-photo-28581340/free-photo-of-vibrant-nightlife-concert-scene-with-mobile-capture.jpeg',
            title:'McLachlan',
            
        }
        

    ])
    const [product3,setProduct3]=useState([
        {
            image:'https://images.pexels.com/photos/3385614/pexels-photo-3385614.jpeg',
            title:'Bts crue',
           
        },
        {
            image:'https://images.pexels.com/photos/5572156/pexels-photo-5572156.jpeg',
            title:'Bts 2',
            
        },
        {
            image:' https://images.pexels.com/photos/3924178/pexels-photo-3924178.jpeg',
            title:'BTs 3',
            
        },
        {
            image:'https://images.pexels.com/photos/5175595/pexels-photo-5175595.jpeg',
            title:'Ledies Suit',
        },
        {
            image:'https://images.pexels.com/photos/167478/pexels-photo-167478.jpeg',
            title:'Kurta-Pant',
           
        },
        {
            image:'https://images.pexels.com/photos/28581340/pexels-photo-28581340/free-photo-of-vibrant-nightlife-concert-scene-with-mobile-capture.jpeg',
            title:'Ledies Suit',
            
        }
        

    ])
    const [userSearch,setUserSearch]=useState('')
const[isAddRecord,setIsAddRecord]=useState(false)
const[isViewRecord,setIsViewRecord]=useState(false)
const[isUpdateRecord,setIsUpdateRecord]=useState(false)
const[isDeleteRecord,setIsDeleteRecord]=useState(false)
const addRecordClick=()=>{
    setIsViewRecord(false)
    setIsDeleteRecord(false)
    setIsUpdateRecord(false)
    setIsAddRecord(true)
}
const viewRecordClick=()=>{
    setIsViewRecord(true)
    setIsDeleteRecord(false)
    setIsUpdateRecord(false)
    setIsAddRecord(false)
}
const updateRecordClick=()=>{
    setIsViewRecord(false)
    setIsDeleteRecord(false)
    setIsUpdateRecord(true)
    setIsAddRecord(false)
}
const deleteRecordClick=()=>{
    setIsViewRecord(false)
    setIsDeleteRecord(true)
    setIsUpdateRecord(false)
    setIsAddRecord(false)
}

    return(
        <>
        
        <div className='button-container'>
            <button onClick={addRecordClick}
            className={isAddRecord ? 'active': ''}>Latest Events</button>
             <button onClick={viewRecordClick}
            className={isViewRecord ? 'active': ''}>Most Popular</button>
             <button onClick={updateRecordClick}
            className={isUpdateRecord ? 'active': ''}>Conference</button>
             <button onClick={deleteRecordClick}
            className={isDeleteRecord ? 'active': ''}>BTS</button>
        </div>
        {
            isAddRecord && <AddRecordComponent/>
        }
        {
            isViewRecord && <ViewRecordComponent/>
        }
        {
            isUpdateRecord && <UpdateRecordComponent/>
        }
        {
            isDeleteRecord && <DeleteRecordComponent/>
        }
        </>
        
    )
    function AddRecordComponent(){
        return(
            <>
            <div className='add-record-container'>
            <div className='card-container'>
        <div className='input-field'>
            
            <input type='text'placeholder='Search Here...'onChange={(e)=>{setUserSearch(e.target.value)}}></input>
        </div>
        {
            products.filter((product)=>{
                return userSearch.toLocaleLowerCase()=== '' ?product :product.title.toLocaleLowerCase().includes(userSearch)
            }).map((product,key)=>{
                return(
                    <div className='card'>
                        <img src={product.image}></img>
                        <h2>{product.title}</h2>
                        <div className='card-footer'>
                            <p>{product.price}</p>
                            <p className={product.isAvailable ? 'available' :'out-of-stock'}>
                               {product.isAvailable ? 'Available':'Out of Stock'}
                            </p>
                        </div>

                    </div>
                )
            })
        }
    </div>
            </div>
            </>
        )
    }
    function ViewRecordComponent(){
        return(
            <>
            <div className='view-record-container'>
            <div className='card-container'>
        <div className='input-field'>
            
            <input type='text'placeholder='Search  Here...'onChange={(e)=>{setUserSearch(e.target.value)}}></input>
        </div>
        {
            product1.filter((prod)=>{
                return userSearch.toLocaleLowerCase()=== '' ?prod :prod.title.toLocaleLowerCase().includes(userSearch)
            }).map((prod,key)=>{
                return(
                    <div className='card'>
                        <img src={prod.image}></img>
                        <h2>{prod.title}</h2>
                        

                    </div>
                )
            })
        }
    </div>
        </div>
            </>
        )
    }
    function UpdateRecordComponent(){
        return(
            <>
            <div className='update-record-container'>
            <div className='card-container'>
        <div className='input-field'>
            
            <input type='text'placeholder='Search Here...'onChange={(e)=>{setUserSearch(e.target.value)}}></input>
        </div>
        {
            product2.filter((produc)=>{
                return userSearch.toLocaleLowerCase()=== '' ?produc :produc.title.toLocaleLowerCase().includes(userSearch)
            }).map((produc,key)=>{
                return(
                    <div className='card'>
                        <img src={produc.image}></img>
                        <h2>{produc.title}</h2>
                        

                    </div>
                )
            })
        }
    </div>
            </div>
            </>
        )
    }
    function DeleteRecordComponent(){
        return(
            <>
            <div className='delete-record-container'>
            <div className='card-container'>
        <div className='input-field'>
            
            <input type='text'placeholder='Search Here...'onChange={(e)=>{setUserSearch(e.target.value)}}></input>
        </div>
        {
            products.filter((product)=>{
                return userSearch.toLocaleLowerCase()=== '' ?product :product.title.toLocaleLowerCase().includes(userSearch)
            }).map((product,key)=>{
                return(
                    <div className='card'>
                        <img src={product.image}></img>
                        <h2>{product.title}</h2>
                        <div className='card-footer'>
                            <p>{product.price}</p>
                            <p className={product.isAvailable ? 'available' :'out-of-stock'}>
                               {product.isAvailable ? 'Available':'Out of Stock'}
                            </p>
                        </div>

                    </div>
                )
            })
        }
    </div>
            </div>
            
            </>
        )
    }
}