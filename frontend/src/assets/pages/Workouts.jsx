import { useState, useEffect} from "react"
import { useNavigate } from "react-router"
import { jwtDecode } from "jwt-decode"
import CreateWorkouts from "../components/CreateWorkouts.jsx";
import "./Workouts.css"

function Workouts(){
    const [workouts, setWorkouts] = useState([])
    const [open, setOpen] = useState(false)
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const user = jwtDecode(token)

    useEffect(() => {
        const getWorkouts = async () => {
            const response = await fetch("http://localhost:8000/workoutplan", {
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            let data = await response.json()
            console.log(data)
            setWorkouts(data)
        }
        getWorkouts();
    }, []);
    console.log(workouts)

    return(
        <div className="workouts-container">
            <h1>Workouts</h1>
            <button onClick={() => setOpen(true)}>Utwórz nowy</button>

            {open &&(
                <CreateWorkouts onClose={() => setOpen(false)} />
            )}

            {workouts.map((workout) => (
                <>
                {console.log(workout.id)}
                <div className="training-card" key={workout.id} onClick={() => navigate(`/workouts/${user["id"]}/${workout.id}`)}>
                    {workout.name}
                </div>
                </>
            ))}
        </div>
    )
}
export default Workouts