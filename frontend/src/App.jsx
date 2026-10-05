import Welcome from "./assets/pages/Welcome.jsx";
import { Routes, Route} from "react-router";
import Login from "./assets/pages/Login.jsx";
import Register from "./assets/pages/Register.jsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
}

export default App
