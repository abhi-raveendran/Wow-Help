import { Link } from 'react-router-dom';
import './nav.css'

const NavBar=()=>{
    return(
        <div className="nav">
            <div className="nav-list">
            <Link className='home'>Home</Link>
            <Link to='/about' className='home'>About</Link>
            {/* <Link className='home'>Contact Us</Link> */}
            <Link to='/login' className='home'>Login</Link>
            </div>
        </div>
    )
}

export default NavBar;