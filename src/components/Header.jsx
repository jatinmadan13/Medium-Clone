import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-black bg-white sticky top-0 z-50">
      <div className="size h-[55px] flex items-center justify-between max-w-7xl mx-auto">
        <img
          className="h-[2.2rem]"
          src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
          alt="logo"
        />

        <div className="flex items-center gap-5">
          <nav className="hidden sm:flex items-center gap-5">
            <Link to="#" className="hover:underline">
              Our Story
            </Link>
            <Link to="#" className="hover:underline">
              Membership
            </Link>
            <Link to="#" className="hover:underline">
              Write
            </Link>
            <Link to="#" className="hover:underline">
              Sign In
            </Link>
            <Link
              to="#"
              className="bg-black text-white px-4 py-2 border rounded-full hover:underline"
            >
              Get Started
            </Link>
          </nav>

          <div className="sm:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white p-4 sm:hidden">
          <nav className="flex flex-col items-center gap-3">
            <Link to="#" className="hover:underline">
              Our Story
            </Link>
            <Link to="#" className="hover:underline">
              Membership
            </Link>
            <Link to="#" className="hover:underline">
              Write
            </Link>
            <Link to="#" className="hover:underline">
              Sign In
            </Link>
            <Link
              to="#"
              className="bg-black text-white px-4 py-2 border rounded-full hover:underline"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
