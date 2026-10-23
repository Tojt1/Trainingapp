import { useLocation } from "react-router"

function  CurrentWorkout(){
    const { state } = useLocation()

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
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default CurrentWorkout