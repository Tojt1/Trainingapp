import { useEffect, useState } from "react"
import "./Dashboard.css"

function Dashboard() {
    const [workout, setworkout] = useState(null)
    const token = localStorage.getItem("token")

    useEffect(() => {
        const getData = async () => {

            const response = await fetch("http://localhost:8000/dashboard", {
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            let data = await response.json()
            setworkout(data)
        }
        getData();
    }, []);

    if (!workout){
        return <div>ładowanie...</div>
    }
    return(
        <div className="workout-card">
            <h1>{workout.name}</h1>
            {workout.workout.map((plan) => (
                <div className="plan" key={plan.id}>

                    <div className="plan-header">
                        <h2>{plan.name}</h2>

                        <span className="started">
                            Rozpoczęto:{" "}
                            {new Date(workout.started).toLocaleString("pl-PL")}
                        </span>
                    </div>
                    <div className="exercises">
                        {plan.exercises.map((exercise) => (
                            <div className="exercise" key={exercise.id}>
                                <span className="exercise-name">
                                    {exercise.excercise.name}
                                </span>

                                <span>
                                    <b>{exercise.weight}</b> kg
                                </span>

                                <span>
                                    <b>{exercise.reps}</b> powt.
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Dashboard