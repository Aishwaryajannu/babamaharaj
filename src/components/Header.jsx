import React from "react";

const Header = () => (
  <header className="w-full bg-white shadow-md p-4 flex items-center justify-between fixed top-0 left-0 z-50">
        <div className="flex justify-center w-full">
          <img src="/logo.png" alt="Logo" className="w-25 h-12" />
        </div>
        <div className="flex md:flex">
          <a
            href="https://acespireconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 w-[150px] h-[30px] flex items-center justify-center text-white text-sm font-semibold rounded"
          >
            Explore Our Website
          </a>
        </div>
      </header>
);

export default Header;
