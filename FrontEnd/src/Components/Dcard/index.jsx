import ButtonD from '../ButtonD'
import './style.css'

const Dcard=({name,image,department,age,hourlyRate,onClick,avail,place})=>{

    return(
        <div className="card-main-l">
        <div className="dcard">
            <img src={image} alt="" />
            <h3>Name:{name}</h3>
            <h4>Age:{age}</h4>
            <h4>Department:{department}</h4>
            <h4>Hour Price:{hourlyRate}  /- Rs</h4>
            <h4>Place:{place}</h4>

            <h4>Available:{avail? 'Yes':'No'}</h4>
            <div className="click">
            
            
            
            <ButtonD   hide={avail} className='click-btn' onClick={onClick}>Book</ButtonD>

            </div>
            
            
        </div>
        </div>
    )
}
export default Dcard