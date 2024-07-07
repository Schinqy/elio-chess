// app/components/Header.tsx

'use client';

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header: React.FC = () => {
  return (
    <nav className="navbar justify-between bg-base-300">
      {/* Logo */}
      <a className="btn btn-ghost text-lg">
        <img alt="Logo" src="/logo.svg" className="w-4" />
        Elio Chess
      </a>

      {/* Menu for mobile */}
      <div className="dropdown dropdown-end sm:hidden">
        <button className="btn btn-ghost">
          <i className="fa-solid fa-bars text-lg"></i>
        </button>

        <ul tabIndex={0} className="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-64 gap-2">
          <li><a>About</a></li>
          <li><a>Support Us</a></li>
          <li>
            <h2 className="menu-title">More</h2>
            <ul>
              <li><a>Tech tools</a></li>
              <li><a>Podcast</a></li>
              <li><a>Community</a></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Menu for desktop */}
      <div className="hidden sm:flex gap-2">
        <a className="btn btn-ghost btn-sm">
          <i className="fa-solid fa-circle-info text-secondary"></i>
          About
        </a>
        <a className="btn btn-ghost btn-sm">
          <i className="fa-solid fa-hands-helping text-secondary"></i>
          Support Us
        </a>

        {/* Dropdown menu */}
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-sm">
            <i className="fa-solid fa-ellipsis-h text-secondary"></i>
            More
            <i className="fa-solid fa-chevron-down"></i>
          </button>

          <ul tabIndex={0} className="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
            <li><a>Tech tools</a></li>
            <li><a>Podcast</a></li>
            <li><a>Community</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
