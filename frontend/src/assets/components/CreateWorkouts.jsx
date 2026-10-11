import { useState, useEffect } from "react"
function CreateWorkouts( {onClose} ){

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