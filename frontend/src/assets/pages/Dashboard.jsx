import { useEffect, useState } from "react"

function Dashboard() {
    const [workouts, setworkouts] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        const getData = async () => {

            const response = await fetch("http://localhost:8000/dashboard", {
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            let data = await response.json()
            setworkouts(data)
        }
        getData();
    }, []);
    return(
        <>
            <h1>Dashboard page</h1>
        </>
    )
}

export default Dashboard