import NavBarU from '../../Components/NavBarU'
import axios from '../../utilities/axios'
import { useState,useEffect } from 'react'
import { getId } from '../../utilities/index.js'
import Input from '../../Components/Input/input.jsx'
import Button from '../../Components/Button/index.jsx'
import { ToastContainer, toast } from 'react-toastify';




import './style.css'

const LabourRequest=()=>{
    const id=getId()
    console.log(id)

    const [labReq,setLabReq]=useState([])
   
    const fetchLabourRequests=async()=>{
        const response=await axios.get(`/book/book/${id}`)
        const bookOrder=response.data.map(item=>({...item,set:"Accept",Rej:"Reject"}))
        setLabReq(bookOrder)
    }
    console.log(labReq)
    useEffect(()=>{
        fetchLabourRequests()
    },[])

    // const[text,setText]=useState('accept')

    // const onAccept=()=>{
    //     setText('Accepted')
    // }

    const onAccept=async(id,index)=>{
        const updateData=[...labReq]
        updateData[index].set='Accepted'
        setLabReq(updateData)
        await axios.patch(`/book/accept/${id}`)
}
    

const onReject=async(id,index)=>{
    const update=[...labReq]
        update[index].Rej='Rejected'
        setLabReq(update)
        await axios.patch(`/book/reject/${id}`)
        toast.success('Request Rejected',{
            onClose:()=>{
                
            },
            autoclose:1000,
           })
    }
    
   

return (
    <div className="main-req">
        <ToastContainer/>
<div className="labour-req">
   <NavBarU/>
   <div className="labour-req-list">
  {
    labReq.map((item,index)=>{
        return (
            <div className="main-l">
            <div className="list-req">
        <label >Requirements:</label>
        <Input value={item.requirements}/>
        <label >Start Date:</label>
        <Input value={item.startDate}/>
        <label >End Date:</label>
        <Input value={item.endDate}/>
        <label>Duration:</label>
        <Input value={item.duration}/>
        <label>Wage:</label>
        <Input value={item.wage}/>
        <label>Home:</label>
        <Input value={item.home}/>
        <label>Place:</label>
        <Input value={item.place}/>
        <label>User:</label>
        <Input value={item.user.name}/>
        <label>Landmark:</label>
        <Input value={item.landMark}/>

        <label>Contact:</label>
        <Input value={item.contactNumber}/>


        {/* <label>Email:</label> */}
        {/* <Input value={item.user.email}/> */}






        <Button onClick={()=>{onAccept(item._id,index)}}>{item.set}</Button>
       
       
        <Button onClick={()=>{onReject(item._id,index)}} >{item.Rej}</Button>

      
</div>
            </div>
        )
    })
  }
    
   </div>

    
</div>
</div>
)   
    

}
export default LabourRequest