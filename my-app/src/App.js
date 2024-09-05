import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';  // Ensure these imports
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/NavBar/NavBar';
import { login, logout as authLogout, isAuthenticated } from './services/authService'; // Import auth service functions
import Logout from './pages/Logout'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'


const AppContent =()=>{
  const navigate = useNavigate(); 
  const handleLogout = () =>{
    authLogout();
    navigate('/login');
  }
  const handleLogin = () =>{
    authLogout();
    navigate('/login');
  }
  return (
    <>
      <div>
        {isAuthenticated() && <Navbar />} 
      </div>
      <div className="app-wrapper">
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<PrivateRoute element={<LoginForm/>} />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<LoginForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </>
    
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
