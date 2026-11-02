import { useState } from "react"

function DeleteWorkout (){
    const [open, setOpen] = useState(false)

    const handleDelete = async () => {
        const response = await fetch("http://localhost")
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