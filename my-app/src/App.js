import './App.css';
import React from 'react';
import '@mui/icons-material';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes, useNavigate, HashRouter } from 'react-router-dom';  // Ensure these imports
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/NavBar/NavBar';
import { login, logout as authLogout, isAuthenticated } from './services/authService'; // Import auth service functions
import Logout from './pages/Logout/Logout'
import Playground from './pages/Playground/Playground';
import Menu from './pages/Menu/Menu';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import 'material-icons/iconfont/material-icons.css';


const AppContent =()=>{
  const navigate = useNavigate();
  return (
    <>
      <div>
        {<Navbar />} 
      </div>
      <div className="app-wrapper">
        <Routes>
            <Route path="/" element={<AboutMe/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/playground" element={<Playground/>}/>
            <Route path="/about-me" element={<AboutMe/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact-me" element={<ContactMe />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
      <div>
        {<Footer />} 
      </div>
    </>
    
  );
}

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
