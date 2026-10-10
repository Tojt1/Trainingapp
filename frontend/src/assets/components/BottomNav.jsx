import { useNavigate, Outlet} from "react-router"
import "./BottomNav.css"

function BottomNav(){
    const navigate = useNavigate()

    return(
        <>
            <nav className="bottom-nav">
                <button onClick={() => navigate("/profile")}>🧑‍💼</button>
                <button onClick={() => navigate("/workouts")}>workouts</button>
            </nav>
            <Outlet />
        </>
    )
}
export default BottomNav