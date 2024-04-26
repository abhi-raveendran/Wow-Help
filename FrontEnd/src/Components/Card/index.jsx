import './style.css'

const Card=({name,description})=>{

    return(
        <div className="card-main">
        <div className="card">
            <h2>{name}</h2>
            <h4>{description}</h4>
        </div>
        </div>
    )
}
export default Card