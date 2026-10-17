import { useState, useEffect } from "react"
import { useParams } from "react-router"
import workouts from "./Workouts.jsx";

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
    console.log(workout.exercises);
    return(
        <div className="workout-container">
            <h1>{workout.name}</h1>
            {workout.exercises.map((exercise) =>(
                <div key={exercise.id}>
                    <h2>{exercise.excercise.name}</h2>
                </div>
                ))}
        </div>
    )
}

export default Workout