import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/shop" element={<Work/>} />
        <Route path="/cart" element={<Work/>} />
      </Routes>
    </div>
  );
}

export default App;
