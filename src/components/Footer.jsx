import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#4A3728]/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#4A3728]">
              <Coffee size={24} />
              <span className="font-bold text-lg tracking-tight">Brew & Bound</span>
            </div>
            <p className="text-[#4A3728]/60 text-sm leading-relaxed">
              Crafting the perfect cup since 2024. We believe in ethical sourcing 
              and the art of the slow pour.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#4A3728] mb-4">Visit Us</h4>
            <address className="not-italic text-[#4A3728]/60 text-sm space-y-2">
              <p>123 Espresso Lane</p>
              <p>Coffee City, CC 54321</p>
              <p>Mon-Sun: 7am - 7pm</p>
            </address>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-[#4A3728] mb-4">Follow the Journey</h4>
            <div className="flex gap-4 text-[#4A3728]/60">
              <Instagram className="hover:text-[#BC8F8F] cursor-pointer transition-colors" size={20} />
              <Twitter className="hover:text-[#BC8F8F] cursor-pointer transition-colors" size={20} />
              <Facebook className="hover:text-[#BC8F8F] cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#4A3728]/5 text-center text-[#4A3728]/40 text-xs">
          © {currentYear} Brew & Bound Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;