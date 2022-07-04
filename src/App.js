import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Team } from './Pages/Team';
import { RTCP } from './Pages/RTCP';
import { Events } from './Pages/Events';
import { Login } from './Pages/Login';
import { Navbar } from './Components/Navbar';
import { Event } from './Pages/Event';
import { Register } from './Pages/Register';
import { Feedback } from './Pages/Feedback';
import { EditEvent } from './Pages/EditEvent';
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
          <Route exact path="/" element={<Home l={loading} sl={setloading} />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/roadmap" element={<RTCP />} />
          <Route exact path="/admin" element={<Login />} />
          <Route exact path="/event/:id" element={<Event />}></Route>
          <Route exact path="/register/:id" element={<Register />}></Route>
          <Route exact path="/feedback/:id" element={<Feedback />}></Route>
          <Route exact path="/edit/:id" element={<EditEvent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
