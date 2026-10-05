import { useState } from "react"
import "./Login.css"

function Login (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:8000/login", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
              email:email,
              password:password
            })
        })
        let data = await response.json()

        console.log("kliknięto")
        console.log(data)
    }

    return(
        <div className="login-container">
            <h1>Zaloguj się:</h1>

            <form className="login-form" onSubmit={handleSubmit}>

                <label className="form-label">email:</label>
                <input className="input-str"
                       type="email"
                       placeholder="Twój email...."
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                />

                <label className="form-label">password:</label>
                <input className="input-str"
                       type="password"
                       placeholder="Hasło...."
                       value={password}
                       onChange={(e)=> setPassword(e.target.value)}
                />
                <button className="form-btn" type="submit">Zaloguj</button>

            </form>
        </div>
    )
}

export default Login