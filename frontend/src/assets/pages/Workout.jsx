import { useState, useEffect } from "react"
import { useParams } from "react-router"
import "./Workout.css"

function Workout(){
    const [workout, setWorkout ] = useState(null)
    const { user_id } = useParams()
    const { workout_plan_id } = useParams()
    const token = localStorage.getItem("token")

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
                            <span className="stat-value">
                                {exercise.reps}
                            </span>
                        </div>
                         </div>
                    </div>
                    ))}
            </div>
            <button className="start-workout">Zacznij</button>
        </div>
    )
}

export default Workout