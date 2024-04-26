import Input from '../../Components/Input/input';
import Select from '../../Components/Select';
import { useState,useEffect } from 'react';
import Button from '../../Components/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from '../../utilities/axios';
import './style.css'
// import axios from 'axios';

const LabourSignUp=()=>{
    const [departments,setDepartments]=useState([])
    const fetchDep=async()=>{
        const response=await axios.get('/department')
        if (Array.isArray(response.data)){
        const data=response.data.map((item)=>{
            return(
                {label:item.name,value:item._id}
            )
        })
        setDepartments(data)
    }}
    useEffect(()=>{
        fetchDep()
    },[])

const [place,setPlace]=useState([])
const fetchPlace=async()=>{
    const response=await axios.get('/location')
    if(Array.isArray(response.data)){
        const data=response.data.map((item)=>{
            return(
                {label:item.name,value:item._id}
            )
        })
        setPlace(data)
    }
}
useEffect(()=>{
    fetchPlace()
},[])



    const [signUp,setSignup]=useState({
        name:'',
        image:'',
        department:'',
        email:'',
        place:'',
        password:'',
        confirmPassword:''
    })
    const onChange=async (e,key)=>{
        if (key=='image'){
           const imageData=new FormData()
           imageData.append('file',e.target.files[0])
           const response=await axios.post('/image',imageData)
        //    if(response.data&&response.data.url){
            setSignup({...signUp,image:response.data.url})
        //    }
        }else{
            setSignup({...signUp,[key]:e.target.value})
        }
    }
    console.log(signUp)

    const navigate=useNavigate()

    const onSignUp=async()=>{
       const response= await axios.post('/labour/signup',signUp)
       toast.success('Signup successfull please Login to continue',{
        onClose:()=>{
            navigate('/labour/login')
        },
        autoclose:1000,
       })


    }
    const onLabourLogin=()=>{
        navigate('/labour/login')
    }
    return(
        <div className="laboursign">
            <ToastContainer/>

            <div className="laboursign-form">
                <h2 className='pitch'>Pitch</h2>
                <h2 className='continue'>Labour Signup</h2>
                <Input onChange={(e)=>onChange(e,'name')} placeholder="Please type your Name"/>
                <Input onChange={(e)=>onChange(e,'image')} placeholder="Please upload your Image" type='file'/>
                <Select onChange={(e)=>onChange(e,'department')} placeholder="Please Choose your Department" option={departments}/>
                <Select onChange={(e)=>onChange(e,'place')} placeholder="Please Choose your Location" option={place}/>

                <Input onChange={(e)=>onChange(e,'age')} placeholder="Please select your age" type='number' />
                <Input onChange={(e)=>onChange(e,'hourlyRate')} placeholder="Please type your price for an Hour" type='number'/>
                <Input onChange={(e)=>onChange(e,'email')} placeholder="Please type your Email"/>
                <Input onChange={(e)=>onChange(e,'password')} placeholder="Please type Password" type='password'/>
                <Input onChange={(e)=>onChange(e,'confirmPassword')} placeholder="Please Confirm your Password" type='password'/>
                <Button className='signup'onClick={onSignUp}>Sign Up</Button>
                <p className='p'>Already have an Account: Please <Button onClick={onLabourLogin}className='signup' >Login</Button></p>

                

            </div>

        </div>
    )

}
export default LabourSignUp;