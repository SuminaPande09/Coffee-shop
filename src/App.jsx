import { Routes, Route } from 'react-router-dom';
// We will create these files in the next phases
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A3728]">
      {/* Navbar stays outside Routes so it appears on every page */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      
      {/* Footer can go here later */}
      <Footer/>
    </div>
  );
}

export default App;