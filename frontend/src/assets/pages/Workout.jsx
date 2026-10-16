import { useState, useEffect } from "react"
import { useParams } from "react-router"

function Workout(){
    const [workout, setWorkout ] = useState([])
    const { user_id } = useParams()
    const { workout_plan_id } = useParams
    const token = localStorage.getItem("token")

    useEffect(() => {
        const getWorkout_plan = async () => {
            const respons = fetch(`http://localhost:8000/workoutplan/${user_id}/${workout_plan_id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (respons.ok) {
                setWorkout(respons.json())
            }
        }
        getWorkout_plan();
    }, []);

    console.log(workout)
}

export default Workout