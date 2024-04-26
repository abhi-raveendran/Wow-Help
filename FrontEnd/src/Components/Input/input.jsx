import './input.css'

const Input=({type='text',onChange,placeholder,className='',value})=>{
   return(
    <input type={type}
    className={`custom-input ${className} `}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    
    />
   )
}

export default Input;