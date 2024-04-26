import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { getId } from '../../utilities';
import { useNavigate } from 'react-router-dom';
import './style.css'

const NavBarU=()=>{
    const id=getId()
    const navigate=useNavigate()
    const onClick=()=>{
        navigate(`/labour/profile/${id}`)
    }

    const onLogout =()=>{
        localStorage.removeItem('token')
        navigate('/labour/login')
    }
   
    return (
        <div className="navbar-u">
            <Logo/>
             <div className="nav-list-u">
            <Link to='/' className='home-l'>Home</Link>
            {/* <Link className='home'>About</Link> */}
            {/* <Link to='/user/department' className='home-l'>Departments</Link> */}
            <p onClick={onLogout} className='home-l'>Logout</p>
            {/* <Link to='/labour/profile/:id' className='home-l'>My Profile</Link> */}
            <button className='profile'onClick={onClick}>My Profile</button>
            


            </div>

        </div>
        
    )
}
export default NavBarU;