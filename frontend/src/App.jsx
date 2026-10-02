import Welcome from "./assets/pages/Welcome.jsx";
import { Routes, Route} from "react-router";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Welcome/>}></Route>
    </Routes>
  )
}

export default App
