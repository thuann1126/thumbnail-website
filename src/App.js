import Homepage from './Components/Home/Homepage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu';
import Galery from './Components/Galery/Galery';
import AboutUs from './Components/AboutUs/AboutUs';
import Signin from './Components/SignIn/Signin';

function App() {
  return (
    <div>
      <div>
        <Router>          
            <Routes>              
              <Route path="/" element={<Homepage/>} />
              <Route path="/menu" element={<Menu/>} />
              <Route path="/galery" element={<Galery/>} />  
              <Route path="/aboutus" element={<AboutUs/>} />  
              <Route path="/signin" element={<Signin/>} />                
            </Routes>          
        </Router>
      </div>
    </div>
  )
}

export default App;
