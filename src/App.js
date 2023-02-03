import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import NewUserWelcome from "./pages/NewUserWelcome";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="welcome">New User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/welcome" element={<NewUserWelcome />} />
      </Routes>
    </>
  );
}

export default App;
