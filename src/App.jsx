import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Navbar from './components/NavBar/NavBar.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />


          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />
          } />}
          />
          
              
        </Routes>
        <Navbar />

      </Router>
    </>
  );
}
