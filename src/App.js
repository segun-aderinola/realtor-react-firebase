import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
