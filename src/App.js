import './App.css';
import { Home } from './Pages/Home';
import { Team } from './Pages/Team';
import { Register } from './Pages/Register';
import { RTCP } from './Pages/RTCP';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/RTCP" element={<RTCP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
