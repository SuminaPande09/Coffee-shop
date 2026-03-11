import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F2]/80 backdrop-blur-md border-b border-[#4A3728]/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 text-[#4A3728] hover:opacity-80 transition-opacity">
          <Coffee size={28} strokeWidth={2.5} />
          <span className="font-bold text-xl tracking-tight">Brew & Bound</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 font-medium">
          <Link 
            to="/" 
            className="hover:text-[#BC8F8F] transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className="hover:text-[#BC8F8F] transition-colors"
          >
            Menu
          </Link>
        </div>

        {/* Simple CTA Button */}
        <button 
          onClick={() => alert('Order feature coming soon!')}
          className="bg-[#4A3728] text-[#FAF7F2] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#BC8F8F] transition-all"
        >
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;