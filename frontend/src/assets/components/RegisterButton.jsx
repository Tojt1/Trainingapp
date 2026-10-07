import { useNavigate} from "react-router"
import "./RegisterButton.css"

function RegisterButton (){
    const navigate = useNavigate()

    return(
        <>
            <button className="register-btn" onClick={navigate("/register")}>Zarejestruj się</button>
        </>
    )
}

export default RegisterButton