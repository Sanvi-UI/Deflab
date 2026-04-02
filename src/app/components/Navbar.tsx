import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import defLabLogo from "figma:asset/1beaac6010fb1a0baf239fe8525c592b2cde9a33.png";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Team", path: "/team" },
  { label: "Facilities", path: "/facilities" },
  { label: "Courses", path: "/courses" },
  { label: "Research", path: "/research" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={defLabLogo} alt="DEF Lab" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-[#FF6600]"
                    : "text-[#666666] hover:text-[#003153]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#666666] hover:text-[#003153]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-[#FF6600]"
                    : "text-[#666666] hover:text-[#003153]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}