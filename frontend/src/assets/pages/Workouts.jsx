import { useState, useEffect} from "react"
import CreateWorkouts from "../components/CreateWorkouts.jsx";
import "./Workouts.css"

function Workouts(){
    const [workouts, setWorkouts] = useState([])
    const [open, setOpen] = useState(false)
    const token = localStorage.getItem("token")

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
                <div className="training-card" key={workout.id}>
                    {workout.name}
                </div>
            ))}
            <CreateWorkouts />
        </div>
    )
}
export default Workouts