import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/header.jsx';
import Footer from './Components/footer.jsx';
import Signup from "./Components/Signup";
import Login from "./Components/login";
import Home from "./Components/Home";
import {Routes,BrowserRouter,Route} from 'react-router-dom';

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

      {/* <Home /> */}
    </>
  );
}

export default App;
