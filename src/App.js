import './App.css';
import { Home } from './Pages/Home';
import { Team } from './Pages/Team';
import { RTCP } from './Pages/RTCP';
import { Events } from './Pages/Events';
import { Login } from './Pages/Login';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
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
