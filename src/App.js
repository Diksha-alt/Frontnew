import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/header.jsx';
import Footer from './Components/footer.jsx';
import Signup from "./Components/Signup";
import Login from "./Components/login";
import Home from "./Components/Home";
<<<<<<< HEAD

import { Routes, BrowserRouter, Route } from "react-router-dom";
=======
import {Routes,BrowserRouter,Route} from 'react-router-dom';
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/' element={<Header />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              
              <Route exact path='/' element={<Footer />} />
 
          </Routes>
      </BrowserRouter> 
    
      {/* <Signup/> */}
      {/* <Login /> */}

<<<<<<< HEAD
      <Home />
=======
      {/* <Home /> */}
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768
    </>
  );
}

export default App;
