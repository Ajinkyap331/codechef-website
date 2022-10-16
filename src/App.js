import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Team } from "./Pages/Team";
import { RTCP } from "./Pages/RTCP";
import { Events } from "./Pages/Events";
import { Login } from "./Pages/Login";
import { Navbar } from "./Components/Navbar";
import { Event } from "./Pages/Event";
import { Register } from "./Pages/Register";
import { Feedback } from "./Pages/Feedback";
import { EditEvent } from "./Pages/EditEvent";
import { Suggestion } from "./Pages/Suggestion";
import { ULogin } from "./Pages/ULogin";
import { Enliven } from "./Pages/Enliven";
import { EnlivenAdmin } from "./Pages/EnlivenAdmin";
import "./Styles/Home.css";
import "./Styles/Team.css";
import "./Styles/Navbar.css";
import "./Styles/RadialBG.css";
import "./Styles/RightData.css";
import "./Styles/Login.css";
import "./Styles/Admin.css";
import "./Styles/Roadmap.css";
import "./Styles/Events.css";
import './Styles/ULogin.css'
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "./store/login-slice";

function App() {

  const [initstate, sis] = useState();

  const dispatch = useDispatch()


  useEffect(() => {
    if(document.cookie == '') return;
    if (document.cookie.split("; ")[0].split("=")[1] !== "-1" && document.cookie.split("; ")[0].split("=")[1] !== "") {
      dispatch(
        loginAction.addLogin({
          photoURL : document.cookie.split("; ")[1].toString().includes("photo") ? document.cookie.split("; ")[1].split("=")[1] : document.cookie.split("; ")[2].split("=")[1],
          displayName: document.cookie.split("; ")[2].toString().includes("display") ? document.cookie.split("; ")[2].split("=")[1] : document.cookie.split("; ")[1].split("=")[1] ,
          email: document.cookie.split("; ")[0].split("=")[1],
        })
      );

    }
  }, [])  


  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/roadmap" element={<RTCP />} />
          <Route exact path="/admin" element={<Login />} />
          <Route exact path="/login" element={<ULogin />} />
          <Route exact path="/enliven/:weekno" element={<Enliven />} />
          <Route exact path="/en/admin" element={<EnlivenAdmin />} />
          <Route exact path="/event/:id" element={<Event />}></Route>
          <Route exact path="/register/:id" element={<Register />}></Route>
          <Route exact path="/feedback/:id" element={<Feedback />}></Route>
          <Route exact path="/edit/:id" element={<EditEvent />}></Route>
          <Route exact path="/suggest" element={<Suggestion />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
