// import { Children } from 'react';
import './button.css'

const Button=({className='',children,onClick, hide=false})=>{
    return (
        <button  className={`btn ${className}`}onClick={onClick}>{children}</button>

    )
}
export default Button;