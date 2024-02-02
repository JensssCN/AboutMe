import "./App.css";
import Home from "./Home.jsx";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import MyWork from "./MyWork.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="AboutMe">
          <header className="Header-And-Nav">
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/My-Work" element={<MyWork />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
