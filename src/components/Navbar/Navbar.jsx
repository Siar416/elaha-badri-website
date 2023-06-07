import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="bg-green text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl">
              Financial <span className="text-pink">Advisor</span>{" "}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/about"
                className="text-gray-300 transition-all duration-500 hover:bg-beige hover:text-pink px-3 py-2 rounded-md text-md font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 transition-all duration-500 hover:bg-beige hover:text-pink px-3 py-2 rounded-md text-md font-medium"
              >
                Contact
              </Link>
              <Link
                to="/resources"
                className="text-gray-300 transition-all duration-500 hover:bg-beige hover:text-pink px-3 py-2 rounded-md text-md font-medium"
              >
                Resources
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="md:hidden">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link
              to="/about"
              className="text-gray-300 transition-all duration-500 hover:bg-beige hover:text-pink px-3 py-2 rounded-md text-md font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 transition-all duration-500 hover:bg-beige hover:text-pink px-3 py-2 rounded-md text-md font-medium"
            >
              Contact
            </Link>
            <Link
              to="/resources"
              className="text-gray-300 transition-all duration-500 hover:bg-beige hover:text-pink px-3 py-2 rounded-md text-md font-medium"
            >
              Resources
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
