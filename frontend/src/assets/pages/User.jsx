import { useState, useEffect } from "react"
import "./User.css"

function User(){
    const [userinf, setUserinf] = useState("")
    const token = localStorage.getItem("token")

    useEffect(() => {
        const getUserInfo = async () => {
            const response = await fetch("http://localhost:8000/settings", {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            })
            let data = await response.json()
            setUserinf(data)
        }
        getUserInfo();
    }, []);

    console.log(userinf)

    return(
        <div className="profil-container">
            <div className="profil-header">
                <h1> {userinf.name} </h1>
                <p> image in the future</p>
            </div>
            <div className="user-inf">
                <span>
                    email: {userinf.email}
                </span>
                <span>
                    created: {userinf.created}
                </span>
            </div>
        </div>
    )
}

export default User