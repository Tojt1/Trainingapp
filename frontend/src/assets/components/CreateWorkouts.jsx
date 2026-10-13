import { useState, useEffect } from "react"
import "./CreateWorkouts.css"

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

    return(
        <div className="cworkout-container">
            <div className="cworkout-background" onClick={onClose}></div>
            <div className="select-workout">
                {[...chosen, ""].map((selected,index)=> (
                    <div key={index}>
                        <select id="exercise-select"
                                value={selected}
                                onChange={(e) => {if(e.target.value){setChosen((old) => [
                                    ...old, e.target.value
                                ])}}}>
                            {exercises.map((exercise) => (
                                <option key={exercise.id} value={exercise.name}>{exercise.name}</option>
                            ))}
                        </select>
                        <input type="text" placeholder="KG" value="" />
                        <input type="text" placeholder="reps" value="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreateWorkouts