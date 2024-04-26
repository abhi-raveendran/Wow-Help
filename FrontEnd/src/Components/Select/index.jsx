import './style.css'

const Select=({className='',onChange,option,placeholder})=>{
    return(
<select onChange={onChange} className={`custom-select ${className}` }>

<option disabled selected>{placeholder}</option>
    {
        option.map((item)=>{
            return(
                <option value={item.value}>{item.label}</option>
            )
        })
    }
</select>
    )
} 
export default Select