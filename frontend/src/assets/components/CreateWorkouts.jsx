import { useState, useEffect } from "react"
function CreateWorkouts( {onClose} ){
    const [exercises, setExercises] = useState([])
    const [chosen, setChosen] = useState([])

    useEffect(() => {
        const getExercises = async () => {
            const response = await fetch("http://localhost:8000/exercises", {
            })
            let data = await response.json()
            setExercises(data)
        }
        getExercises();
    }, []);

    const handlePress = ( exercise ) => {
        setChosen((old) => [old, exercise])
        console.log(chosen)
    }

    return(
        <div className="cworkout-container">
            <div className="cworkout-background" onClick={onClose}></div>
            <div className="cworkout-som">
                {exercises.map((exercise) => (
                    <div key={exercise.id}>
                        <button className="exercise-btn" onClick={() => handlePress(exercise.name)}>{exercise.name}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreateWorkouts