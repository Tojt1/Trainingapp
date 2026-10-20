import { useState, useEffect } from "react"
import "./CreateWorkouts.css"

function CreateWorkouts( {onClose} ){
    const [exercises, setExercises] = useState([])
    const [workoutName, setWorkoutName] = useState("")
    const [errorName, setErrorName] = useState("")
    const [chosen, setChosen] = useState([{exercises_id:"", kg:"", rep:""}])
    const token = localStorage.getItem("token")

    useEffect(() => {
        const getExercises = async () => {
            const response = await fetch("http://localhost:8000/exercises")
            let data = await response.json()
            setExercises(data)
        }
        getExercises();
    }, []);

    const handleExerciseChange = (index, exercise_id) => {
        setChosen((old) => old.map((item, i) => i === index
            ? {...item, exercises_id:exercise_id}
            : item
        ))

        if(index === chosen.length-1){
            setChosen((old) => [
                ...old, {
                exercises_id:"", kg:'', rep:""
                }
            ])

        }
    }

    const handleSubmit = async () => {
        if (workoutName.trim() === ""){
            setErrorName("Nazwa treningu jest wymagana")
            return
        }

        const response = await fetch("http://localhost:8000/workoutplan", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: workoutName,
                exercises: chosen.filter((item) => item.exercises_id !== "").map((item) => ({
                    exercise_id: Number(item.exercises_id),
                    weight: Number(item.kg),
                    reps: Number(item.rep)}))
            })
            })
        if (response.ok){
            console.log("Pomyślnie utworzono workoutplan")
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
            <div className="workout-front">
                <input type="text" placeholder="Nazwa..." value={workoutName} onChange={(e) => setWorkoutName(e.target.value)} />
                <p className="error-name">{errorName}</p>
                    {[...chosen, ...(chosen.length===0 ?[{exercises_id:"", kg:"" ,rep:""}] :[])].map((item,index)=> (
                        <div key={index}>
                            <select id="exercise-select"
                                    value={item.exercises_id}
                                    onChange={(e) => handleExerciseChange(index, e.target.value)}>

                                <option value="">Wybierz ćwiczenie</option>
                                {exercises.map((exercise) => (
                                    <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
                                ))}
                            </select>
                            <input type="number" placeholder="KG" value={item.kg} onChange={(e) => handleChange(index, "kg", e.target.value)}/>
                            <input type="number" placeholder="reps" value={item.rep} onChange={(e) =>  handleChange(index, "rep", e.target.value)}/>
                        </div>
                    ))}
                    <button className="workout-submit" onClick={handleSubmit}>Zapisz</button>
            </div>
        </div>
    )
}

export default CreateWorkouts