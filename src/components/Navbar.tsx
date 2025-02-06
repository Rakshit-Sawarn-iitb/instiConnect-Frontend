import React from "react";
import Logo from "./Shared/Logo"; // Import your Logo component

function Navbar() {
  return (
    <nav className="w-[1280px] h-[80px] bg-[#1B1728] flex items-center justify-between pr-8 pl-8">
      {/* Left side: Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Right side: Navbar Links */}
      <ul className="list-none flex space-x-8">
        <li className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[35px] h-[35px] text-white mb-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <a href="/home" className="text-white font-lexend no-underline">
            Home
          </a>
        </li>
        <li>
          <a href="/network" className="text-white no-underline">
            Network
          </a>
        </li>
        <li>
          <a href="/me" className="text-white no-underline">
            Me
          </a>
        </li>
        <li>
          <a href="/myblogs" className="text-white no-underline">
            My Blogs
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
