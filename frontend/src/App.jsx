import { Routes, Route} from "react-router";
import Welcome from "./assets/pages/Welcome.jsx";
import Login from "./assets/pages/Login.jsx";
import Register from "./assets/pages/Register.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  )
}

export default App
