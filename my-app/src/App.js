import "./App.css";
import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  HashRouter,
} from "react-router-dom"; // Ensure these imports
import NotFound from "./components/NotFound/NotFound";
import AboutMe from "./pages/AboutMe/AboutMe";
import colors from "./assets/colors";
import Navbar from "./components/NavBar/NavBar";

const AppContent = () => {
  const navigate = useNavigate();
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
