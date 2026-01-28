import { useState } from "react";
import { Link, useLocation } from "react-router";
import { NavItems } from "../helpers/constant";
import { Menu, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-16 bg-white text-black w-full shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center h-full mx-5 md:mx-7">
        {/* Logo */}
        <div className="text-2xl text-green-500 font-bold tracking-wider">
          Calories
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-x-4">
          {NavItems.map((item, index) => (
            <Link to={item.slug} key={index}>
              <p
                className={`flex items-center gap-x-2 hover:text-green-500 hover:bg-gray-100 font-semibold px-4 py-2 rounded-md ease-in-out duration-300 transition-all ${
                  pathname === item.slug && "bg-gray-100 text-green-500"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </p>
            </Link>
          ))}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center text-green-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm flex flex-col items-start px-5 py-3 gap-y-2">
          {NavItems.map((item, index) => (
            <Link
              to={item.slug}
              key={index}
              onClick={() => setMenuOpen(false)} // close menu when link clicked
              className={`w-full flex items-center gap-x-3 py-2 px-3 rounded-md font-semibold hover:bg-gray-100 hover:text-green-500 ${
                pathname === item.slug && "bg-gray-100 text-green-500"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </Link>
          ))}
          <div className="px-4 py-2">
            <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
