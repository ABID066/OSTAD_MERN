import React, { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[FFFFFF] text-[#1C1E53]">
            <div className="container mx-auto flex justify-between items-center  p-4">
                {/* Logo */}
                <div >
                    <img src="../assets/assets/Logo.png" alt=""/>
                </div>

                {/* Menu Items */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="#home" className="hover:text-[#5E3BEE]">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-cyan-400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-cyan-400">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-cyan-400">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Hamburger Menu */}
                <div
                    className="md:hidden cursor-pointer"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <ul className="flex flex-col text-white space-y-4 bg-[#5E3BEE] p-4 md:hidden">
                    <li>
                        <a href="#home" className="block hover:text-black">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="block hover:text-cyan-400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="block hover:text-cyan-400">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="block hover:text-cyan-400">
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
