import { useState, useEffect} from "react"

function Workouts(){
    const [workouts, setWorkouts] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        const getWorkouts = async () => {
            const response = await fetch("http://localhost:8000/workoutplan", {
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            let data = await response.json()
            console.log(data)
            setWorkouts(data)
        }
        getWorkouts();
    }, []);
    console.log(workouts)

    return(
        <>
            <h1>Workout page</h1>
        </>
    )
}
export default Workouts