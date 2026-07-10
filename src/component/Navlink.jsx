'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
  const pathName =usePathname()
  const isActive =pathName===href
  return (
    <Link 
      href={href} 
      className={`px-3 py-1.5 rounded-lg font-medium text-xs md:text-sm transition-all duration-300 ${
        isActive 
          ? 'bg-[#004d00] text-white shadow-xs' 
          : 'text-gray-700 hover:bg-[#004d00]/10 hover:text-[#004d00]'
      }`}
    >
      {children}
    </Link>
  )
};

export default NavLink;