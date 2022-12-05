import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import Login from "./Components/login";
import Home from "./Components/Home";

import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Signup/> */}
      {/* <Login /> */}

      <Home />
    </>
  );
}

export default App;
