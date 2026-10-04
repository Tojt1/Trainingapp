import { useState } from "react"

function Login (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("kliknięto")
    }

    return(
        <div className="login-container">
            <h1>Zaloguj się:</h1>
            <form "login-form">
                <input className="login-email"
                       type="email"
                       placeholder="Twój email...."
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                />
                <input className="login-email"
                       type="password"
                       placeholder="Hasło...."
                       value={password}
                       onChange={(e)=> setPassword(e.target.value)}
                />
                <button className="login-bttn" type="submit"><strong>Zaloguj</strong></button>
            </form>
        </div>
    )
}

export default Login