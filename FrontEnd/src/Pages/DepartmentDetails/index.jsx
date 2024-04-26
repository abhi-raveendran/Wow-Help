import Dcard from '../../Components/Dcard';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../utilities/axios'
import NavBarL from '../../Components/NavBarL';
import { useNavigate } from 'react-router-dom';
import './style.css'

const DepartmentDetails=()=>{
    const {id}=useParams()
    const [departmentDetails,setDepartmentDetails]=useState([])

    const fetchDepDetails=async()=>{
        const response=await axios.get(`/labour/department/${id}`)
        setDepartmentDetails(response.data)
    }
    console.log(departmentDetails)
    useEffect(()=>{
        fetchDepDetails()
    },[])

const navigate=useNavigate()

const onClick=async (id)=>{
    
    navigate(`/labour/bookingpage/${id}`)
}
    return(
        <div className="departmentdetails">
            <NavBarL/>
            <div className="h21">
                <br />
            <h1>Helper Here!</h1>
            </div>

            <div className="department-list-one">
            {
                departmentDetails.map((item)=>{
                    return(
                        <div className="detail-labours">
                            <Dcard avail={item.available} name={item.name} image={item.image} department={item.department.name} age={item.age} hourlyRate={item.hourlyRate} place={item.place.name} onClick={()=>{onClick(item._id)}} />
                        </div>
                    )
                })
            }
            </div>
            
        </div>

    )
}
export default DepartmentDetails;