import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import About from './pages/about';
import NavigationPublic from './pages/navigationPublic';
import NavigationLogIn from './pages/navigationLogIn';
import Cars from './pages/cars';
import ScrollTop from './pages/scrollTop';

function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cars" element={<Cars />} />
      </Routes>
    </Router>
  );
}

export default App;
