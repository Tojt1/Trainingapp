import { useEffect, useState } from "react"

function Dashboard() {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:8000/dashboard", {
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    jwt:localStorage.getItem("token")
                })
            })
            let data = await response.json()
            setData(data)
        }
        getData();
    }, []);

    console.log(data)

    return(
        <>
            <h1>Dashboard page</h1>
        </>
    )
}

export default Dashboard