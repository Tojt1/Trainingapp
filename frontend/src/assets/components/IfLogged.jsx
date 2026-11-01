import { Outlet, Navigate } from "react-router"

function IfLogged () {
    const token = localStorage.getItem("token")

    if (token){
        return <Navigate to="/dashboard" replace/>
    } else{
        return <Outlet />
    }
}

export default IfLogged