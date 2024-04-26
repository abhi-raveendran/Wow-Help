import { useNavigate } from 'react-router-dom'
import './home.css'

const Home=()=>{
const navigate=useNavigate()

  const onClick=()=>{
    navigate('/admin/department')
  
  }
  const onLocation=()=>{
    navigate('/admin/location')
  }
  return(
    <div className="main">
      <button onClick={onClick}>Add Dep</button>
      <button onClick={onLocation}>Add District</button>


    </div>
  )
}
export default Home;