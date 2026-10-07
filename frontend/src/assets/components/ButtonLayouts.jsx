import RegisterButton from "./RegisterButton.jsx";
import LoginButton from "./LoginButton.jsx";
import { Outlet } from "react-router"

function ButtonLayouts(){

    return(
        <>
            <RegisterButton />
            <LoginButton />

            <Outlet />
        </>
    )
}

export default ButtonLayouts