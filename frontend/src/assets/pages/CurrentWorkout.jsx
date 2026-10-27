import { useLocation } from "react-router"
import { useState } from "react"

function  CurrentWorkout(){
    const { state } = useLocation()
    const [completedExercises, setCompletedExercises] = useState([])

    const workoutplan = state?.workout;

    if (!workoutplan){
        console.log("wystąpił problem")
    }
    else{
        console.log(workoutplan)
    }

    return(
        <div className="start-container">
            <h1>{workoutplan.name}</h1>
            <div className="start-list" >
                {workoutplan.exercises.map((workout) => (
                    <div className="exercise-inf" key={workout.id}>
                        <h2>{workout.excercise.name}</h2>

                        <input type="checkbox"
                        checked={completedExercises.includes(workout.id)}
                        onChange={() =>{
                            setCompletedExercises((prev) => prev.includes(workout.id)
                            ?prev.filter((id) => id !== workout.id)
                                : [...prev, workout.id]
                            )
                        }}/>

                        <div className="exercise-set">
                            <span className="stat-label">Ciężar</span>
                            <span className="stat-value">
                                {workout.weight}<small>kg</small>
                            </span>
                        </div>
                         <div className="exercise-set">
                            <span className="stat-label">reps</span>
                            <span className="stat-value">
                                {workout.reps}<small>reps</small>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default CurrentWorkout