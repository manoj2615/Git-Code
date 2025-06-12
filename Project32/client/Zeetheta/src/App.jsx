import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Simulations from './pages/Simulations';
import Industries from './pages/Industries';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Hero from './components/Hero';

import  Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} /> 
        
      </Routes> 
    </Router>
  );
}

export default App;
