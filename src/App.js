import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Project from './pages/Project';
import Shop from './pages/Shop';
import DropdownNav from './components/DropdownNav';
import { projects } from './utils/projects';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    // const location = useLocation();
    
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
                <Route path="/about" element={<Work/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/cart" element={<Work/>} />
            </Routes>
        </div>
    );
}

export default App;
