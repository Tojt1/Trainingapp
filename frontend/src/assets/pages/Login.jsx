import { useState } from "react"
import "./Login.css"

function Login (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("kliknięto")
        console.log(email)
        console.log(password)
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

                <button className="form-btn" type="submit"><strong>Zaloguj</strong></button>

            </form>
        </div>
    )
}

export default Login