import Input from '../../Components/Input/input'
import Button from '../../Components/Button'
import Logo from '../../Components/Logo'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../utilities/axios'
import { ToastContainer, toast } from 'react-toastify';

import './style.css'

const UserSignup=()=>{
    const navigate=useNavigate()
    const onClick=()=>{
        navigate('/labour/signup')
    }
    const [userSign,setUserSign]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const onChange=(e,key)=>{
        setUserSign({...userSign,[key]:e.target.value})
    }
    console.log(userSign)

    const onSignUser=async()=>{
        await axios.post('/user/signup',userSign)
        toast.success('Signup success Please login to continue',{
            onClose:()=>{
                navigate('/login')
            },
            autoClose:1000,
        })
    }
    const onLogin=()=>{
        navigate('/labour/login')

    }
 
    return(
        <div className="user-signUp">
            <ToastContainer/>
            <div className="logo-back">
            <Logo className='logo-back'/>
            </div>

            <div className="user-signup-form">
               <h2 className='pitch'>Pitch</h2>
                <h2 className='continue'>User Signup</h2>
                <Input onChange={(e)=>{onChange(e,'name')}} placeholder="Please type your Name"/>
                <Input onChange={(e)=>{onChange(e,'email')}}placeholder="Please type your Email"/>
                <Input onChange={(e)=>{onChange(e,'password')}} type='password' placeholder="Please type your Password"/>
                <Input onChange={(e)=>{onChange(e,'confirmPassword')}} type='password' placeholder='Please confirm your Password'/>
               <Button onClick={onSignUser} className='signup'>Sign Up</Button>
               {/* <Button className='signup' onClick={onClick}>Register as a Labour</Button> */}
               <Button className='signup' onClick={onLogin}>Labour Login</Button>


            </div>

            
        </div>
    )
}
export default UserSignup