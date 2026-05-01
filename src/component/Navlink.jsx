'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
  const pathName =usePathname()
  const isActive =pathName===href
  return <Link href={href} className={`${isActive?'bg-[#004d00] text-white px-3 py-2 rounded ':''}`}>{children}</Link>
};

export default NavLink;