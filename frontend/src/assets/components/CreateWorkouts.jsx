import { useState, useEffect } from "react"
import "./CreateWorkouts.css"

function CreateWorkouts( {onClose} ){
    const [exercises, setExercises] = useState([])
    const [chosen, setChosen] = useState([{exercises:"", kg:"", rep:""}])

    useEffect(() => {
        const getExercises = async () => {
            const response = await fetch("http://localhost:8000/exercises")
            let data = await response.json()
            setExercises(data)
        }
        getExercises();
    }, []);

    const HandleExerciseChange = (index, name) => {
        setChosen((old) => old.map((item, i) => i === index
            ? {...item, exercises:name}
            : item
        ))

        if(index === chosen.length-1){
            setChosen((old) => [
                ...old, {
                exercises:"", kg:'', rep:""
                }
            ])

        }
    }

    const handleChange = (index, field, value) => {
        setChosen((old) => old.map((item, i) => i===index
        ? {...item, [field]:value}
        :item))
    }

    return(
        <div className="cworkout-container">
            <div className="cworkout-background" onClick={onClose}></div>
            <div className="select-workout">
                {[...chosen, ...(chosen.length===0 ?[{exercises:"", kg:"" ,rep:""}] :[])].map((item,index)=> (
                    <div key={index}>
                        <select id="exercise-select"
                                value={item.exercises}
                                onChange={(e) => HandleExerciseChange(index, e.target.value)}>

                            <option>Wybierz ćwiczenie</option>
                            {exercises.map((exercise) => (
                                <option key={exercise.id} value={exercise.name}>{exercise.name}</option>
                            ))}
                        </select>
                        <input type="number" placeholder="KG" value={item.kg} onChange={(e) => handleChange(index, "kg", e.target.value)}/>
                        <input type="number" placeholder="reps" value={item.rep} onChange={(e) =>  handleChange(index, "rep", e.target.value)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreateWorkouts