import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Login from "./components/auth/Login";
import Login1 from "./components/Login1";
import Signup from "./components/auth/Signup";
import Signup1 from "./components/Signup1";

function App() {
  return (
    <div className="flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/login" element={<Login1 />}></Route>
          <Route path="/signup" element={<Signup1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
