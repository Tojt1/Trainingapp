import { useNavigate, Outlet} from "react-router"
function RegisterButton (){
    const navigate = useNavigate()

    return(
        <>
            <button className="register-btn" onClick={navigate("/register")}>Zarejestruj się</button>
            <Outlet />
        </>
    )
}

export default RegisterButton