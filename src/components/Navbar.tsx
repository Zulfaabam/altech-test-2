import { useState } from "react";
import logo from "../assets/react.svg";

interface TNavbarProps {
  openLogin: () => void;
}

const Navbar = ({ openLogin }: TNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menu = ["about", "pricing", "contact"];

  return (
    <>
      <nav className="w-full h-24 flex items-center justify-between px-8 absolute top-0 left-0 right-0 z-10">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-14" />
          <p className="uppercase font-semibold text-white">Home</p>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {menu.map((m) => (
            <a key={m} href={`#${m}`} className="uppercase font-semibold">
              {m}
            </a>
          ))}
          <button
            className="border border-blue-400 w-32 py-1 rounded-lg text-blue-400 uppercase font-medium"
            onClick={openLogin}
          >
            Login
          </button>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </nav>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white transform transition-transform w-64 z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-4 pt-24">
          {menu.map((m) => (
            <a
              key={m}
              href={`#${m}`}
              className="uppercase font-semibold"
              onClick={closeMenu}
            >
              {m}
            </a>
          ))}
          <button
            className="border border-blue-400 w-32 py-1 rounded-lg text-blue-400 uppercase font-medium"
            onClick={openLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
