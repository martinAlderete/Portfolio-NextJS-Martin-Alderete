"use client"
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Transition from './Transition';

const Navigation = () => {

  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();

  useEffect(() => {
    // Actualizar isActive cuando la ruta cambie
    setIsRouting(true);
  }, [path]);

  return (
    <div style={{ left: "20%" }} className='absolute z-[50] -bottom-14 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white'>
      {isRouting && <Transition />} {/* Esto activará la animación de transición */}
      {NavLinks.map(nav => (
        <Link
          key={nav.name}
          href={nav.link}
          className='mb-16 px-4 pt-3 min-w-[20%]'
        >
          <nav.icon className={`w-[24px] h-[24px] ${path === nav.link ? "text-purple-800" : "text-white"}`}/>
        </Link>
      ))}
    </div>
  )
}

export default Navigation
