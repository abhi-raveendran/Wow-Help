import Logo from '../Logo'
import './style.css'

const BottomBar=()=>{
    return (
        <div className="btm-bar">
            <div className="lgo">
                <Logo className='a'/>
            </div>
            <div className="contact">
                <h5>Contact Us</h5>
                <div className="cnt">
               <p>Email:wowhelp@gmail.com</p>
               <p>Phone:9947244964</p>
               </div>
            </div>
            <div className="follow">
                <h5>Follow Us</h5>
                <div className="fb">
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                </div>
            </div>
            <div className="quick">
                <h5>Quick Links</h5>
                <div className="qk">
                <p>About Us</p>
                <p>Contact Us</p>
                </div>
                
            </div>

        </div>
    )
}

export default BottomBar