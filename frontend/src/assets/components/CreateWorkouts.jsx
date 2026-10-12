import { useState, useEffect } from "react"
function CreateWorkouts( {onClose} ){
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const getExercises = async () => {
            const response = await fetch("http://localhost:8000/exercises", {
            })
            let data = await response.json()
            setExercises(data)
        }
        getExercises();
    }, []);

    console.log(exercises)

    return(
        <div className="cworkout-container">
            <div className="cworkout-background" onClick={onClose}></div>
            <div className="cworkout-som">
                <h1>Hej</h1>
            </div>
        </div>
    )
}

export default CreateWorkouts