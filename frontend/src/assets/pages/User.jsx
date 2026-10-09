import { useState, useEffect } from "react"

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
            <div className="profil-header"></div>
            <h1>User</h1>
            {userinf.name}
        </div>
    )
}

export default User