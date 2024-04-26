import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { useNavigate } from 'react-router-dom';
import './style.css'

const NavBarL=()=>{
    const navigate=useNavigate()

    const onClick=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
   
    return (
        <div className="navbar-l">
            <Logo/>
             <div className="nav-list-l">
            <Link to='/' className='home-l'>Home</Link>
            {/* <Link className='home'>About</Link> */}
            <Link to='/user/department' className='home-l'>Departments</Link>
        <p onClick={onClick} className='home-l'>Logout</p>
            </div>

        </div>
        
    )
}
export default NavBarL;