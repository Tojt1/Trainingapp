import { useNavigate } from "react-router"

function BottomNav(){
    const navigate = useNavigate()

    return(
        <nav className="bottom-nav">
            <button onClick={() => navigate("/profile")}></button>
        </nav>
    )
}