"use client";

import Link from "next/link";
import NavLink from "./Navlink";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" px-2 bg-[#ccffcc] border-b border-[#004d00] py-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full px-3">
        
        {/* Logo */}
        <h3 className="font-bold text-2xl md:text-3xl">
          <span className="text-[#004d00]">Qurbani</span>
          <span className="text-[#004d00]">Hat</span>
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/allAnimals">All Animals</NavLink></li>
          <li><NavLink href="/profile">Profile</NavLink></li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4 text-sm">
          <Link href="/signup">SignUp</Link>
          <Link href="/signin">SignIn</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
           <IoMdMenu></IoMdMenu>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/allPhotos">All Animals</NavLink>
          <NavLink href="/profile">Profile</NavLink>

          <hr />

          <Link href="/signup">SignUp</Link>
          <Link href="/signin">SignIn</Link>
        </div>
      )}
     
    </div>
  );
};

export default Navbar;