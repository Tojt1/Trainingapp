import { useEffect, useState } from "react"

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
        <>
            <div className="workout-card">
                <div>
                    <h1>{workout.name}</h1>
                    <p>
                        Rozpoczęto: {new Date(workout.started).toLocaleString("pl-PL")}
                    </p>
                </div>
                <div className="workout-section">
                    {workout.workout.map((plan)=> (
                        <div className="workout-section" key={plan.id}>
                            <h2>{plan.name}</h2>
                            <div className="exercises">
                                {plan.exercises.map((exercise) => (
                                    <div className="exercises">
                                        <div>
                                            {exercise.excercise.name}
                                        </div>
                                        <div className="exercise-info">
                                            <spn>
                                                <b>{exercise.weight}</b>kg.
                                            </spn>
                                            <span>
                                                <b>{exercise.reps}</b>powt.
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dashboard