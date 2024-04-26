import { isTokenValid,checkRole } from "../../utilities";
import { Navigate,Outlet } from "react-router-dom";

const PrivateRoute=({role,path})=>{
    if(isTokenValid()&&checkRole(role)){
        return <Outlet/>
    }else{
        return <Navigate to={path}/>
    }
    

}
export default PrivateRoute;