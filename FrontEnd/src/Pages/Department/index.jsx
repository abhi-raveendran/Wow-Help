import Card from '../../Components/Card'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Logo from '../../Components/Logo'
import axios from '../../utilities/axios'
import { Link } from 'react-router-dom'
import { getId } from '../../utilities'
import './style.css'

const Department=()=>{

    const userId=getId()

    
    const [department,setDepartment]=useState([])
    const fetchDepartment=async()=>{
        const response=await axios.get('/department')
        setDepartment(response.data)
    }
    useEffect(()=>{
        fetchDepartment()
    },[])


    const navigate=useNavigate()
    const onDepClick=async(id)=>{
        navigate(`/department/departmentdetails/${id}`)
    }



    return (
        <div className="department">
            <div className="b">
            <Logo className='b'/>
            </div>
            <h1 className='h1'> Choose your Department</h1>
            <div className="link-u">
            <Link to={`/booking/${userId}`} className='link-l'>My Bookings</Link>
            </div>
          
            <div className="department-list">
                {
                    department.map((item)=>{
                        return(
                            <div className="card1" onClick={()=>onDepClick(item._id)}>
                            <Card name={item.name} description={item.description}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )

}
export default Department