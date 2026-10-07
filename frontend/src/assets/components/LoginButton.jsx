import { useNavigate, Outlet} from "react-router"

function LoginButton (){
    const navigate = useNavigate()

    return(
        <>
            <button className="login-btn" onClick={navigate("/login")}>Zaloguj się</button>
        </>
    )
}

export default LoginButton