"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import ModeToggle from "../ui/modeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur border-b border-white/10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-6 2xl:max-w-[1400px]">
        <Link to="hero" smooth={true} duration={900} offset={-80}>
          <h1 className="cursor-pointer text-2xl font-bold">Mobil.in</h1>
        </Link>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={900}
              offset={-80}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={900}
              offset={-80}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="service"
              smooth={true}
              duration={900}
              offset={-60}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={900}
              offset={-20}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-xl focus:outline-none transition-transform hover:scale-110 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="transition-transform duration-300" />
          ) : (
            <FiMenu className="transition-transform duration-300" />
          )}
        </button>

        {/* Mobile Menu with transitions */}
        <div
          className={`
          md:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-md
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <ul className="flex flex-col items-center gap-4 p-4">
            <li className="w-full">
              <Link
                to="hero"
                smooth={true}
                duration={900}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-2 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="about"
                smooth={true}
                duration={900}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-2 hover:text-blue-500 transition-colors cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="service"
                smooth={true}
                duration={900}
                offset={20}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-2 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Service
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="contact"
                smooth={true}
                duration={900}
                offset={0}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-2 hover:text-blue-500 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
