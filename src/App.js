import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios';
import {Scrollbars} from 'react-custom-scrollbars'
import Home from './Component/HomeCompnent/Homepage';
import Login from './Component/RegistationComponet/Login';
import Registation from './Component/RegistationComponet/Registation';
import {BrowserRouter,Route,Routes,Outlet} from 'react-router-dom'

function App() {
 
  const PrivateRout = (auth)=>{
      return auth?
      <>
      <Outlet/>
      </>:
      <>
      <Login/>
      </>
  }

  const [auth,setAuth] = useState(false)

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login auth={setAuth}/>}/>
      <Route path="/registation" element={<Registation/>}/>
      <Route path="/" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
