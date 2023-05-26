import Navbar from './components/Navbar';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Project from './pages/Project';
import Shop from './pages/Shop';
import DropdownNav from './components/DropdownNav';
import Footer from './components/Footer';
import About from './pages/About';
import { projects } from './utils/projects';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { useAuth } from './firebase/auth';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const location = useLocation();
    const { authUser } = useAuth();

    const ProtectedRoute = ({children}) => {
        console.log('authuser app', authUser);
        if (!authUser) {
            return <Navigate to='login' />;
        }

        return children;
    }
    
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
                <Route path='/admin'>
                    <Route index element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }></Route>
                    <Route path='login' element={<Login />}></Route>
                </Route>
            </Routes>
            {location.pathname === '/' ? "" : <Footer />}
        </div>
    );
}

export default App;
