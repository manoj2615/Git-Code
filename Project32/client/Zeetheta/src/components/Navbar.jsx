// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Unique Zeetheta logo: colorful spark/theta SVG
function Logo() {
  return (
    <span className="flex flex-col items-center">
      <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 via-blue-400 to-yellow-300 flex items-center justify-center shadow-lg mb-1">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 4v8M12 12l4.2 7M12 12l-4.2 7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="12" cy="13.8" rx="4.6" ry="4.2" stroke="#fff" strokeWidth="2"/>
        </svg>
      </span>
      <span className="text-sm font-bold tracking-wide text-purple-700">Zeetheta</span>
    </span>
  );
}

// Inline SVG icons
const icons = {
  zap: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
    </svg>
  ),
  industries: (
    // New modern factory icon
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      {/* Chimney */}
      <rect x="5" y="4" width="3" height="6" rx="1" fill="#6366f1" stroke="none"/>
      {/* Building */}
      <rect x="3" y="10" width="16" height="9" rx="2" stroke="#6366f1" fill="none"/>
      {/* Windows */}
      <rect x="6" y="13" width="2" height="2" rx="0.4" fill="#6366f1" stroke="none"/>
      <rect x="10" y="13" width="2" height="2" rx="0.4" fill="#6366f1" stroke="none"/>
      <rect x="14" y="13" width="2" height="2" rx="0.4" fill="#6366f1" stroke="none"/>
      {/* Door */}
      <rect x="10" y="16" width="3" height="3" rx="0.5" fill="#6366f1" stroke="none"/>
    </svg>
  ),
  about: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a7.5 7.5 0 0113 0" />
    </svg>
  ),
  award: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 21l5-2 5 2-1.21-7.11" />
    </svg>
  ),
  chevron: (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  menu: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = [
    { label: "Simulations", to: "/simulations", icon: icons.zap, dropdown: true },
    { label: "Industries", to: "/industries", icon: icons.industries },
    { label: "About", to: "/about", icon: icons.about },
    { label: "For Students", to: "/dashboard", icon: icons.award },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Only (centered above Zeetheta name) */}
            <Link to="/" className="flex items-center gap-3">
              <Logo />
            </Link>
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 items-center">
              {nav.map((item, i) => {
                const isActive =
                  location.pathname === item.to ||
                  (item.to !== "/" && location.pathname.startsWith(item.to));
                return (
                  <Link
                    key={i}
                    to={item.to}
                    className={`
                      flex items-center gap-1 font-medium transition
                      ${isActive
                        ? "text-purple-700"
                        : "text-gray-700 hover:text-purple-600"
                      }
                      relative pb-2
                    `}
                  >
                    {item.icon}
                    {item.label}
                    {item.dropdown && icons.chevron}
                    {/* Animated underline */}
                    <span
                      className={`
                        absolute -bottom-0.5 left-0 w-full h-[2px] 
                        rounded bg-gradient-to-r from-purple-500 to-blue-400
                        transition-transform duration-300
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                        origin-left
                      `}
                    />
                  </Link>
                );
              })}
            </div>
            {/* Desktop Actions */}
            <div className="hidden md:flex gap-3 items-center">
              <Link to="/auth">
                <button className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded transition">
                  Sign In
                </button>
              </Link>
              <Link to="/auth">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow hover:from-purple-700 hover:to-blue-700 transition">
                  Start Free Trial
                </button>
              </Link>
            </div>
            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-purple-50"
              onClick={() => setOpen(!open)}
            >
              {open ? icons.close : icons.menu}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur border-t border-purple-100 py-4">
            <div className="px-4 space-y-3">
              {nav.map((item, i) => {
                const isActive =
                  location.pathname === item.to ||
                  (item.to !== "/" && location.pathname.startsWith(item.to));
                return (
                  <Link
                    key={i}
                    to={item.to}
                    className={`
                      flex items-center gap-2 py-2 font-medium
                      ${isActive ? "text-purple-700" : "text-gray-700 hover:text-purple-600"}
                      hover:bg-purple-50 rounded-lg transition
                    `}
                    onClick={() => setOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                    {item.dropdown && icons.chevron}
                    {isActive && (
                      <span className="ml-2 h-1 w-5 rounded bg-gradient-to-r from-purple-500 to-blue-400" />
                    )}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-purple-100 space-y-2">
                <Link to="/auth" onClick={() => setOpen(false)}>
                  <button className="w-full text-left text-gray-700 px-4 py-2 rounded hover:bg-purple-50">
                    Sign In
                  </button>
                </Link>
                <Link to="/auth" onClick={() => setOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow hover:from-purple-700 hover:to-blue-700 transition">
                    Start Free Trial
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-20" /> {/* Adds spacing below navbar */}
    </>
  );
}
