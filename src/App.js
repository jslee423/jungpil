import './App.css';
import Navbar from './components/Navbar';
import DropdownNav from './components/DropdownNav';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Footer from './components/Footer';
import projects from './utils/projects';
import Project from './pages/Project';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <DropdownNav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        {projects.map((project, index) => {
          return (
            <Route path={`/work/${project.path}`} element={<Project />} key={index} />
          )
        })}
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Work/>} />
        <Route path="/cart" element={<Work/>} />
      </Routes>
      {location.pathname === "/" ? "" : <Footer />}
    </div>
  );
}

export default App;
