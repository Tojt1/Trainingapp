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
        </div>
    )
    
}

export default CurrentWorkout