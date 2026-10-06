import { Outlet, Navigate } from "react-router"

function CheckLogged(){
    const token = localStorage.getItem("token")

    if (token){
        return <Outlet />
    }
    else{
        return <Navigate to="/login" replace/>
    }
}

export default CheckLogged