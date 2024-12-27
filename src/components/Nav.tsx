"use client";

import Image from "next/image";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  const [navSticky, setNavSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>("");

  // Get the current page's pathname
  useEffect(() => {
    setCurrentPath(window.location.pathname); // Set initial path
  }, []); // Run once after the component mounts

  useEffect(() => {
    const handleScroll = () => {
      setNavSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to determine if the current link is active
  const isActive = (path: string) => {
    return currentPath === path ? "text-gray-100 bg-[#BF9F56] px-3 py-1" : "";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        navSticky
          ? "bg-white shadow-lg text-[#D4BF8E]" // Sticky state
          : "bg-white  text-[#332910]" // Transparent state
      }`}
    >
      <div className="container mx-auto px-3 md:px-2 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src="/logo.png" // Replace with the path to your image
              alt="SKY BEE LOGO"
              width={160}
              height={160}
              className=""
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-xl">
          <Link href="/" className={` ${isActive("/")}`}>
            Home
          </Link>
          <Link href="/sell" className={` ${isActive("/sell")}`}>
            Sell
          </Link>
          <Link
            href="/rent
"
            className={` ${isActive("/rent")}`}
          >
            Rent
          </Link>
          <Link href="/about" className={` ${isActive("/about")}`}>
            About
          </Link>
          <Link href="/contact" className={` ${isActive("/contact")}`}>
            Contact
          </Link>
          <Link href="/language" className={` ${isActive("/language")}`}>
            Language
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`md:hidden focus:outline-none transition-transform duration-300 ${
            navSticky ? "text-[#01699F]" : "text-[#DAE9F1]"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Custom Hamburger Icon */}
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black opacity-100 text-[4vw] shadow-lg text-center space-y-7 transition-transform duration-300 ${
          isMenuOpen ? "h-[100vh]" : "max-h-0 overflow-hidden"
        }`}
      >
        <Link
          href="/"
          className={`block px-4 pt-20 text-gray-100 hover:text-[#6DA9C8]  ${isActive(
            "/"
          )}`}
        >
          Home
        </Link>
        <Link
          href="/sell"
          className={`block px-4 py-2 text-gray-100 hover:text-[#6DA9C8]  ${isActive(
            "/sell"
          )}`}
        >
          Sell
        </Link>
        <Link
          href="/rent"
          className={`block px-4 py-2 text-gray-100 hover:text-[#6DA9C8]  ${isActive(
            "/rent"
          )}`}
        >
          Rent
        </Link>
        <Link
          href="/about"
          className={`block px-4 py-2 text-gray-100 hover:text-[#6DA9C8]  ${isActive(
            "/about"
          )}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`block px-4 py-2 text-gray-100 hover:text-[#6DA9C8]  ${isActive(
            "/contact"
          )}`}
        >
          Contact
        </Link>
        <Link
          href="/language"
          className={`block px-4 py-2 text-gray-100 hover:text-[#6DA9C8]  ${isActive(
            "/language"
          )}`}
        >
          Language
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
