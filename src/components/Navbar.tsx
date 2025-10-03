// // src/components/Navbar.tsx
// "use client";

// export default function Navbar() {
//     return (
//         <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
//             <div className="container mx-auto flex justify-between items-center py-4 px-6">
//                 <h1 className="text-2xl font-extrabold text-indigo-600 tracking-wide">
//                     <a href="./">MyPortfolio</a>
//                 </h1>
//                 <ul className="flex space-x-6 font-medium">
//                     <li><a href="./#about" className="hover:text-indigo-600">About</a></li>
//                     <li><a href="./#skills" className="hover:text-indigo-600">Skills</a></li>
//                     <li><a href="./#projects" className="hover:text-indigo-600">Projects</a></li>
//                     <li><a href="./#contact" className="hover:text-indigo-600">Contact</a></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }


// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // ไอคอนจาก lucide-react

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <h1 className="text-2xl font-extrabold text-indigo-600 tracking-wide">
                    <a href="./">MyPortfolio</a>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    <li><a href="./#about" className="hover:text-indigo-600">About</a></li>
                    <li><a href="./#skills" className="hover:text-indigo-600">Skills</a></li>
                    <li><a href="./#projects" className="hover:text-indigo-600">Projects</a></li>
                    <li><a href="./#contact" className="hover:text-indigo-600">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-indigo-600" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
                        <li><a href="./#about" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">About</a></li>
                        <li><a href="./#skills" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">Skills</a></li>
                        <li><a href="./#projects" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">Projects</a></li>
                        <li><a href="./#contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
