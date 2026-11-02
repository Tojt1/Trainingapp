import { useState } from "react"

function DeleteWorkout ( {user_id, workout_plan_id} ){
    const [open, setOpen] = useState(false)
    const token = localStorage.getItem("token")

    const handleDelete = async () => {
        const response = await fetch(`http://localhost/workoutplan/${user_id}/${workout_plan_id}`, {
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        if (response.ok){
            alert(response.json())
        }
        else {
            alert(response.json())
        }
    }
    return(
        <>
            <button className="open-deletU" onClick={() => setOpen(true)}>Usuń konto</button>
            {open && (
                <div className="delete-account-background" onClick={() => setOpen(false)}>
                    <div className="delete-account-container" onClick={(e) => e.stopPropagation()}>
                        <p>Czy na pewno chcesz usunąć to ćwiczenie?</p>
                        <button className="confirm-btn" onClick={}>Tak</button>
                        <button className="denied-btn" onClick={() => setOpen(false)}>Nie</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeleteWorkout