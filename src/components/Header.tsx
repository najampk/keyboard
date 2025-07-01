
import { Link } from "react-router-dom";
import { Keyboard, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Windows Test", path: "/windows-keyboard-test", description: "Test Windows keyboards" },
    { name: "Mac Test", path: "/mac-keyboard-test", description: "Test Mac keyboards" },
    { name: "Gaming Test", path: "/gaming-keyboard-test", description: "Test gaming keyboards" },
    { name: "Mechanical Test", path: "/mechanical-keyboard-test", description: "Test mechanical keyboards" },
    { name: "Laptop Test", path: "/laptop-keyboard-test", description: "Test laptop keyboards" },
    { name: "Free Software", path: "/keyboard-testing-software-free-download", description: "Free testing software" }
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
            aria-label="KeyTest Pro - Professional Keyboard Tester"
          >
            <Keyboard className="h-8 w-8 text-cyan-400" />
            <div>
              <span className="text-xl font-bold">KeyTest Pro</span>
              <span className="block text-xs text-slate-400">Professional Keyboard Tester</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                title={item.description}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                  title={item.description}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
