"use client";

import Link from "next/link";
import NavLink from "./Navlink";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const userData=authClient.useSession()
  const user=userData.data?.user
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSignOut=async()=>{
    await authClient.signOut();
  }
  return (
    <div className="sticky top-0 z-50 px-2 bg-[#ccffcc]/90 backdrop-blur-md border-b border-[#004d00]/20 py-2 shadow-xs transition-all duration-300">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full px-3">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl md:text-3xl tracking-tight group flex items-center gap-1.5 transition-transform duration-200 active:scale-95">
          <span className="text-[#004d00] group-hover:text-[#006600] transition-colors duration-200">Qurbani</span>
          <span className="text-[#008000] bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-lg group-hover:bg-[#004d00] group-hover:text-white transition-all duration-300">Hat</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/allAnimals">All Animals</NavLink></li>
          <li><NavLink href="/profile">Profile</NavLink></li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4 text-sm">
          {! user && <ul className="flex justify-center items-center gap-3">
            <li><NavLink href="/signin">Login</NavLink></li>
            <li><NavLink href="/signup">Register</NavLink></li>
          </ul>}
          {user && 
          <div className="flex justify-center items-center gap-3">
            <Avatar>
        <Avatar.Image alt={user?.name} src={user?.image} 
        referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
            {/* <Avatar>
        <Avatar.Image alt={user?.image} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar> */}
      <Button onClick={handleSignOut} variant="danger">Logout</Button>
          </div>
          }
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
           <IoMdMenu></IoMdMenu>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden flex flex-col gap-4 px-4 pb-4 text-sm"
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/allAnimals">All Animals</NavLink>
            <NavLink href="/profile">Profile</NavLink>

            <hr className="border-emerald-100" />

            <div className="flex gap-4 text-sm">
              {!user && (
                <ul className="flex justify-center items-center gap-3">
                  <li><NavLink href="/signin">Login</NavLink></li>
                  <li><NavLink href="/signup">Register</NavLink></li>
                </ul>
              )}
              {user && (
                <div className="flex justify-center items-center gap-3">
                  <Avatar>
                    <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <Button onClick={handleSignOut} variant="danger">Logout</Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
     
    </div>
  );
};

export default Navbar;