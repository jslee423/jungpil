import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Project from './pages/Project';
import Shop from './pages/Shop';
import DropdownNav from './components/DropdownNav';
import Footer from './components/Footer';
import About from './pages/About';
import { projects } from './utils/projects';
import './App.scss';
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
                        <Route path={`/work/${project.path}`} element={<Project name={project.name} />} key={index} />
                    )
                })}
                <Route path="/about" element={<About/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/cart" element={<Work/>} />
            </Routes>
            {location.pathname === '/' ? "" : <Footer />}
        </div>
    );
}

export default App;
