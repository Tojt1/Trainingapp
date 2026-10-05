import { useState } from "react"

function Register () {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    return(
        <div className="register-container">
            <h1>Register</h1>
            <form className="register-form">
                <input className="input-str"
                       type="text"
                       placeholder="Twoje imie"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                <input className="input-str"
                       type="email"
                       placeholder="Twój email..."
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <input className="input-str"
                       type="password"
                       placeholder="Hasło..."
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <input className="input-age"
                       type="number"
                       placeholder="0"
                       value={age}
                       onChange={(e) => setAge(e.target.value)}
                />
                <button>Zarejestruj śię</button>
            </form>
        </div>
    )
}

export default Register