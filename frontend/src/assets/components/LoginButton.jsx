import { useNavigate} from "react-router"
import "./LoginButton.css"

function LoginButton (){
    const navigate = useNavigate()

    return(
        <>
            <button className="login-btn" onClick={navigate("/login")}>Zaloguj się</button>
        </>
    )
}

export default LoginButton