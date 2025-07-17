
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { User, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoginDisabled = true;
const isSubscribeDisabled = true;

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Areas of Expertise", href: "#expertise" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="fixed w-full bg-white/100 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#403E43]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
            <Link 
              to="/login" 
              className="flex items-center space-x-1 px-4 py-2 rounded-md border border-legal-DEFAULT hover:bg-gray-700 hover:text-white base-transition "
            >
              <User size={18} />
              <span>Login</span>
            </Link>
            {/* <Link 
              to="/signup" 
              className="flex items-center space-x-1 px-4 py-2 rounded-md border border-legal-DEFAULT hover:bg-legal-DEFAULT hover:text-white base-transition"
            >
              <UserPlus size={18} />
              <span>Subscribe</span>
            </Link> */}
              <Link
                to="/signup"
                className="flex items-center space-x-1 px-4 py-2 rounded-md border border-legal-DEFAULT hover:bg-legal-DEFAULT hover:text-white hover:animate-blink1 base-transition"
              >
                <UserPlus size={18} />
                <span>Subscribe</span>
              </Link>

              {/* <Link
                to={isLoginDisabled ? "#" : "/login"}
                onClick={(e) => isLoginDisabled && e.preventDefault()}
                className={`flex items-center space-x-1 px-4 py-2 rounded-md border border-legal-DEFAULT base-transition ${isLoginDisabled
                    ? "pointer-events-none opacity-50 cursor-not-allowed"
                    : "hover:bg-legal-DEFAULT hover:text-white"
                  }`}
              >
                <User size={18} />
                <span>Login</span>
              </Link>

              <Link
                to={isSubscribeDisabled ? "#" : "/signup"}
                onClick={(e) => isSubscribeDisabled && e.preventDefault()}
                className={`flex items-center space-x-1 px-4 py-2 rounded-md border border-legal-DEFAULT base-transition ${isSubscribeDisabled
                    ? "pointer-events-none opacity-50 cursor-not-allowed"
                    : "hover:bg-legal-DEFAULT hover:text-white hover:animate-blink1"
                  }`}
              >
                <UserPlus size={18} />
                <span>Subscribe</span>
              </Link> */}


          </div>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-sm font-medium px-4 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="outline"
                  className="text-[#403E43] border-[#403E43] hover:bg-[#403E43] hover:text-white w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Login
                </Button>

                <Button
                  className="bg-[#403E43] text-white hover:bg-[#221F26] w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Subscribe
                </Button>

              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
