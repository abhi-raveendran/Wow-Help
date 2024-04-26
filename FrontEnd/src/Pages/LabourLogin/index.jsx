import Input from '../../Components/Input/input'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from '../../utilities/axios'
import Logo from '../../Components/Logo'
import './style.css'

const LabourLogin=()=>{
    const navigate=useNavigate()
    const onClick=()=>{
        navigate('/labour/signup')
        
    }
    const [dataLabour,setDataLabour]=useState({
        email:"",
        password:""
    })
    
    const onLoginLabour=(e,key)=>{
        console.log('working')
        setDataLabour({...dataLabour,[key]:e.target.value})
    }
    // console.log(data)
    const onLogin=async ()=>{
       const response = await axios.post('/labour/login',dataLabour)
       if(response.data.token){
        localStorage.setItem('token',response.data.token)
       }
        navigate('/labour/request')
    }




    return(
        <div className="login">
            <div className="back-img">
            <Logo className="logo-back"/>
            </div>
            <div className="login-list">
            <h2 className='pitch'>Pitch</h2>
            <h3 className='continue'>Labour Login</h3>
            <Input placeholder='Please type Email' onChange={(e)=>{onLoginLabour(e,"email")}} />
            <Input placeholder='Please type Password' type='password' onChange={(e)=>{onLoginLabour(e,"password")}}/>
            <Button  className='login-btn' onClick={onLogin}>Login</Button>
            <div className="account">
                <p >Dont have an Account : <Button className="signup" onClick={onClick}>Please Signup </Button></p>
            </div>
           </div>
        </div>
    )
}
export  default LabourLogin;