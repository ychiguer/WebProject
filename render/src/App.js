import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/home';
import Intro from './pages/intro';
import Login from './pages/login';
import SignUp from './pages/signup';
import Cars from './pages/cars';
import ScrollTop from './pages/scrollTop';
import CreateAdd from './pages/createAdd';
import { useState } from "react";

function App() {

  const [user, setUser] = useState(null);


  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route exact path='/' element={<Home data={[user, setUser]} />} />
        <Route exact path='/login' element={<Login data={[user, setUser]} />} />
        <Route exact path='/signup' element={<SignUp data={[user, setUser]} />} />
        <Route exact path="/about" element={<Intro data={[user, setUser]} />} />
        <Route exact path="/cars" element={<Cars data={[user, setUser]} />} />
        <Route exact path="/createAdd" element={<CreateAdd data={[user, setUser]} />} />
      </Routes>
    </Router>
  );
}

export default App;
