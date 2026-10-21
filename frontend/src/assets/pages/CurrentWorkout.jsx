import { useEffect } from "react"
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

    // useEffect(() => {
    //     const getWorkoutPlan = async () => {
    //         const response = await fetch("https://localhost:8000/workout")
    //     }
    // }, []);

}

export default CurrentWorkout