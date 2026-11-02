import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import "./Workout.css"
import DeleteWorkout from "../components/DeleteWorkout.jsx";

function Workout(){
    const [workout, setWorkout ] = useState(null)
    const { user_id } = useParams()
    const { workout_plan_id } = useParams()
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(() => {
        const getWorkout_plan = async () => {
            const respons = await fetch(`http://localhost:8000/workoutplan/${user_id}/${workout_plan_id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (respons.ok) {
                setWorkout(await respons.json())
            }
        }
        getWorkout_plan();
    }, []);

    const handleStartWorkout = () => {
        navigate("start", {
            state: { workout },
        })
    }

    if (!workout){
        return <p>ładowanie ćwiczeń....</p>
    }
    return(
        <div className="workout-container">
            <h1>{workout.name}</h1>
            <div className="workout-list">
                {workout.exercises.map((exercise) =>(
                    <div className="exercise-card" key={exercise.id}>
                        <h2>{exercise.excercise.name}</h2>
                         <div className="exercise-stats">
                        <div className="stat">
                            <span className="stat-label">Ciężar</span>
                            <span className="stat-value">
                                {exercise.weight} <small>kg</small>
                            </span>
                        </div>

                        <div className="stat">
                            <span className="stat-label">Powtórzenia</span>
                            <div className="reps-list">
                                {exercise.reps.map((rep, repIndex) => (
                                    <span className="rep-stat" key={repIndex}>{rep}</span>
                                ))}
                            </div>
                        </div>
                         </div>
                    </div>
                    ))}
            </div>
            <button className="start-workout" onClick={handleStartWorkout}>Zacznij</button>
            <DeleteWorkout />
        </div>
    )
}

export default Workout