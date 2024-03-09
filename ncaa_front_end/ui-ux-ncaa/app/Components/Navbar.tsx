"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

export function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavBar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image src={Logo} alt="Logo" />
              </div>
            </div>
            <div className="flex items-center justify-center flex-grow text-white pl-auto;">
              The Model
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Services
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavBar}
              >
                {isClick ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                About
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Services
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

/*

*/
/*


*/

/*

<>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg"
                >
                  Services
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavBar}
              >
                {isClick ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                About
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Services
              </a>
            </div>
          </div>
        )}
      </nav>
    </>


*/
