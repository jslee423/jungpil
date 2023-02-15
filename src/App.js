import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/shop" element={<Work/>} />
        <Route path="/cart" element={<Work/>} />
      </Routes>
      {location.pathname === "/" ? "" : <Footer />}
    </div>
  );
}

export default App;
