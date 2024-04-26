import Input from '../../Components/Input/input'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Logo from '../../Components/Logo'
import axios from '../../utilities/axios'

import './login.css'

const UserLogin=()=>{
    const navigate=useNavigate()
    const onClick=()=>{
        
        navigate('/user/signup')

    }

const [data,setData]=useState({
    email:"",
    password:""
})

const onLogin=(e,key)=>{
    setData({...data,[key]:e.target.value})
}
console.log(data)
const onUserLogin=async ()=>{
   const response=   await axios.post('/user/login',data)
    if(response.data.token){
        localStorage.setItem('token',response.data.token)
       }
    navigate('/user/department')
}



    return(
        <div className="login">
            <div className="back-img">
                <div className="logo-back">
            <Logo className="logo-back"/>
            </div>
            </div>
            <div className="login-list">
            <h2 className='pitch'>Pitch</h2>
            <h3 className='continue'>User Login</h3>
            <Input placeholder='Please type Email' onChange={(e)=>{onLogin(e,"email")}}/>
            <Input type='password' placeholder='Please type Password' onChange={(e)=>{onLogin(e,"password")}}/>
            <Button  onClick={onUserLogin} className='login-btn'>Login</Button>
            <div className="account">
                <p >Dont have an Account : <Button className="signup" onClick={onClick}>Please Signup </Button></p>
            </div>
           </div>
        </div>
    )
}
export  default UserLogin