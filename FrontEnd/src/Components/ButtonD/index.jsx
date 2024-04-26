import './style.css'
// import { Children } from 'react';
// import './button.css'

const ButtonD=({className='',children,onClick, hide=false})=>{
    return (
        <button style={{display:`${hide?'block':'none'}`}}
        className={`btn ${className}`}onClick={onClick}>{children}</button>

    )
}
export default ButtonD;