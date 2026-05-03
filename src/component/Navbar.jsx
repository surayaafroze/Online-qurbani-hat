"use client";

import Link from "next/link";
import NavLink from "./Navlink";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const userData=authClient.useSession()
  const user=userData.data?.user
  console.log(user)
  const [isOpen, setIsOpen] = useState(false);
  
const handelSignOut=async()=>{
await authClient.signOut();
}
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
          {! user && <ul className="flex justify-center items-center gap-3">
            <li><Link href="/signin">Login</Link></li>
            <li><Link href="/signup">Register</Link></li>
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
      <Button onClick={handelSignOut} variant="danger">Logout</Button>
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
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/allAnimals">All Animals</NavLink>
          <NavLink href="/profile">Profile</NavLink>

          <hr />

           <div className="hidden md:flex gap-4 text-sm">
          {! user && <ul className="flex justify-center items-center gap-3">
            <li><Link href="/signin">login</Link></li>
            <li><Link href="/signup">Register</Link></li>
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
      <Button  variant="danger">Logout</Button>
          </div>
          }
        </div>
        </div>
      )}
     
    </div>
  );
};

export default Navbar;