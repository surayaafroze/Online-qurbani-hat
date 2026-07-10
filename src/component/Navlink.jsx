'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const NavLink = ({href,children}) => {
  const pathName = usePathname()
  const isActive = pathName === href
  return (
    <Link 
      href={href} 
      className="relative px-3 py-1.5 rounded-lg font-medium text-xs md:text-sm transition-colors duration-300 inline-block"
    >
      {isActive && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute inset-0 bg-[#004d00] rounded-lg"
          style={{ zIndex: -1 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className={isActive ? 'text-white' : 'text-gray-700 hover:text-[#004d00]'}>
        {children}
      </span>
    </Link>
  )
};

export default NavLink;