import Welcome from "./assets/pages/Welcome.jsx";
import { Routes, Route} from "react-router";
import Login from "./assets/pages/Login.jsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
  )
}

export default App
