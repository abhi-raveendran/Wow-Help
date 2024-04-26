import { useState,useEffect } from 'react'
import Input from '../../Components/Input/input'
import NavBarL from '../../Components/NavBarL'
import Button from '../../Components/Button'
import axios from '../../utilities/axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getId } from '../../utilities'
import { ToastContainer, toast } from 'react-toastify';
import BottomBar from '../../Components/BottomBar'



import './style.css'

const BookLabour=()=>{
    
    const {id}=useParams()
    const [requirements,setRequirements]=useState({
        requirements:"",
        startDate:"",
        endDate:"",
        duration:"",
        wage:"",
        home:"",
        place:"",
        contactNumber:"",
        landMark:"",
        user:getId()

    })
    console.log(id)

    const onLabourChange=(e,key)=>{
        setRequirements({...requirements,[key]:e.target.value})
    }
    console.log(requirements)

    // const navigate=useNavigate()

    const onBookReq=async()=>{
        await axios.post(`/book/${id}`,requirements)
        toast.success("Booking Successfull",{autoClose:2000})
        
        
    
        
    }

// const [buttonText,setButtonText]=useState('book')

// const onButtonClick=()=>{
//     setButtonText("pending")
// }





    return(
        <div className="book-labour">
            <ToastContainer/>
        <NavBarL/>
        
        <h1>Feel free to add your requirements here..</h1>
        <div className="labour-h1">

        <Input onChange={(e)=>onLabourChange(e,'requirements')} className='require' placeholder="Requirements"/>
        <Input onChange={(e)=>onLabourChange(e,'startDate')} placeholder="Start Date" type='date'/>
        <Input onChange={(e)=>onLabourChange(e,'endDate')} placeholder="End Date" type='date'/>
        <Input onChange={(e)=>onLabourChange(e,'duration')} placeholder="Duration"/>
        <Input onChange={(e)=>onLabourChange(e,'wage')} placeholder="Wage"/>
        <Input onChange={(e)=>onLabourChange(e,'home')} placeholder="Home"/>
        <Input onChange={(e)=>onLabourChange(e,'contactNumber')} placeholder="Contact Number" type='number'/>
        <Input onChange={(e)=>onLabourChange(e,'landMark')} placeholder="Landmark"/>



        <Input onChange={(e)=>onLabourChange(e,'place')} placeholder="Place"/>

        
            {/* <div  onClick={onButtonClick}  className="lis"> */}
        <Button className='bot' onClick={onBookReq}>Book</Button>
        </div>
        <BottomBar/>
    
        
        </div>


        
    )

}
export default BookLabour