import { useState,useEffect } from 'react'
import Input from '../../Components/Input/input/'
import { getId } from '../../utilities'
import axios from '../../utilities/axios'
import NavBarU from '../../Components/NavBarU'
import './style.css'
import Button from '../../Components/Button'
import { useParams } from 'react-router-dom'

const LabourProfile=()=>{
    const id=getId()
    const [profile,setProfile]=useState({
        name:"",
        age:"",
        department:"",
        available:""
    })
    const onChange=(e,key)=>{
        setProfile({...profile,[key]:e.target.value})
        }

    const fetchProfile=async()=>{
        const response=await axios.patch(`labour/edit/${id}`)
        setProfile(response.data)
    }
    useEffect(()=>{
        fetchProfile()
    },[])

    const onSave=async()=>{
    const response=await axios.patch(`/labour/edit/${id}`,profile)
    // console.log(response.data)
    }

    const [data,setData]=useState([])

    const fecthBook=async()=>{
        const response=await axios.get(`/book/book/${id}`)
        setData(response.data)
    }
    console.log(data)
    useEffect(()=>{
        fecthBook()
    },[])

    const {bookId}=useParams()
    const onDlt=async(id)=>{
        await axios.delete(`/book/book/${id}`)
        fecthBook()


    }
// fecthBook()
   
    return (
        <div className="bat">
            <NavBarU/>
            <div className="req-profile">
            <div className="profile-data">
                <h2 className='req'>Edit Profile</h2>
            <Input value={profile.name}  placeholder="name" onChange={(e)=>{onChange(e,'name')}}/>
            <Input value={profile.age} placeholder="age" onChange={(e)=>{onChange(e,'age')}}/>
            <Input value={profile.department.name} placeholder="department" onChange={(e)=>{onChange(e,'department')}}/>
            <Input value={profile.available} placeholder="available" onChange={(e)=>{onChange(e,'available')}}/>
<Button onClick={onSave}>Save</Button>
          </div>

<div className="requirements">
    {
        data.map((item)=>{
            return(
            <div className="req-data">
                <h2 className='req'>Requirements</h2>
            <Input value={item.requirements}/>
            <Input value={item.startDate}/>
            <Input value={item.endDate}/>
            <Input value={item.duration}/>
            <Input value={item.wage}/>
            <Button onClick={()=>onDlt(item._id)}>Delete</Button>
            </div>

         ) })
    }
    </div>
</div>

</div>


)
}
export default LabourProfile