import { useState } from 'react'
import axios from '../../../src/components/axios'
import './style.css'

const AddLocation=()=>{
    const[location,setLocation]=useState([])
    const onIpChange=(e,key)=>{
        setLocation({...location,[key]:e.target.value})

    }
    console.log(location)
    const onAddLocation=async()=>{
        const response=await axios.post('/location',location)

    }


    return(
        <div className="location">
            <input type="text" placeholder='add location' onChange={(e)=>{onIpChange(e,'name')}} />
            <button onClick={onAddLocation}>Add location</button>

        </div>
    )
}

export default AddLocation