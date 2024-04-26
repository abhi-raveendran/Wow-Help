import { useEffect, useState } from 'react';
import axios from '../../utilities/axios'
import { getId } from '../../utilities';

import './style.css'

const MyBookings=()=>{
    const id=getId()
    console.log(id)
    const [myBook,setMyBook]=useState([])

    const fetchData=async()=>{
        const response=await axios.get(`/book/${id}`)
        setMyBook(response.data)
        
    }
    console.log(myBook)
    useEffect(()=>{
        fetchData()
    },[])

const onDlt=async(id)=>{
    await axios.delete(`/book/${id}`)
fetchData() 
}

    
    return (
        <div className="mybooks">
            <h1 className='h'>My Bookings</h1>

            <div className="mybook-l">
    {myBook.map((item, index) => (
        <div key={index} className="booking">
            <div className="book-map">
                <h2 className='y'>Booking Details</h2>
                <div className="detail"><span className="label">Requirements:</span> <h4 className="value">{item.requirements}</h4></div>
                <div className="detail"><span className="label">Start Date:</span> <h4 className="value">{item.startDate}</h4></div>
                <div className="detail"><span className="label">End Date:</span> <h4 className="value">{item.endDate}</h4></div>
                <div className="detail"><span className="label">Labour Name:</span> <h4 className="value">{item.labour.name}</h4></div>
                <div className="detail"><span className="label">Duration:</span> <h4 className="value">{item.duration}</h4></div>
                <div className="detail"><span className="label">Wage:</span> <h4 className="value">${item.wage}</h4></div>
                <div className="detail"><span className="label">Status:</span> <h4 className="value">{item.status}</h4></div>

                <i onClick={()=>{onDlt(item._id)}} class="fa-solid fa-trash"></i>
            </div>
        </div>
    ))}
</div>

        </div>
    )
}
export default MyBookings;