import './App.css';
import {useState,useEffect} from 'react';
import Home from './Component/Home';


function App() {
 
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  return (
    <div className="App">
     {/* <BrowserRouter>
     <Routes>
      </Route>
     </Routes>
     </BrowserRouter> */}
     <Home/>
    </div>
  );
}

export default App;
