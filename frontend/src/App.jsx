import { Routes, Route} from "react-router";
import Welcome from "./assets/pages/Welcome.jsx";
import Login from "./assets/pages/Login.jsx";
import Register from "./assets/pages/Register.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";
import CheckLogged from "./assets/components/CheckLogged.jsx";
import ButtonLayouts from "./assets/components/ButtonLayouts.jsx";

function App() {

  return (
    <Routes>
        <Route element={<ButtonLayouts />}>
            <Route path="/" element={<Welcome/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route element={<CheckLogged />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
    </Routes>
  )
}

export default App
