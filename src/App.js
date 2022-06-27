import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './Pages/Home';
import { Team } from './Pages/Team';
import { RTCP } from './Pages/RTCP';
import { Events } from './Pages/Events';
import { Login } from './Pages/Login';
import { Navbar } from './Components/Navbar';
import './Styles/Home.css'
import './Styles/Team.css'
import './Styles/Navbar.css'
import './Styles/RadialBG.css'
import './Styles/RightData.css'
import './Styles/Login.css'
import './Styles/Admin.css'



function App() {

  const [loading, setloading] = useState(true)

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home  l = {loading} sl = {setloading}/>} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/roadmap" element={<RTCP />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
