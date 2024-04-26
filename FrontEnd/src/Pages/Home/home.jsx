import NavBar from '../../Components/NavBar'
import Logo from '../../Components/Logo'
import { useState } from 'react';
import axios from '../../utilities/axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


import './home.css'


const Home=()=>{
const navigate=useNavigate()
const onClick=()=>{
        toast.success('Please login to continue',{
            onClose:()=>{
                navigate('/login')
            },
            autoClose:1000,
        })
        

    }

    return(
        <div className="home">
            <ToastContainer/>
            <div className="o-n">
            <div className="o">
                <Logo/>
            </div>
            <div className="n">
                <NavBar/>
            </div>
            </div>

        <div className="pg-imgh">
            <div className="pg">
                <h2>Crafting Your Curiosity</h2>
                <h1>With best Labourers</h1>
                <div className="nw">
                <button className='now' onClick={onClick}>Explore Now</button>
                </div>
                </div>
            <div className="imgh"></div>
        </div>

        



            
        </div>
    )
}
export default Home