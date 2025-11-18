'use client'

import React, { useState } from 'react';
import { navLink } from './Navbar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const MobileNav = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    return (
        <div >
            <p className='text-2xl cursor-pointer select-none' onClick={() => setOpen(!open)}>{open ? '▦' : '▥'}</p>
            <div className={`fixed top-[60px] w-full flex flex-col gap-3 left-0 text-center h-screen bg-white dark:bg-neutral-950 ${open ? 'block' : 'hidden'}`}>
                {open && (
                    navLink.map((item, idx) => (
                        <Link
                            key={idx}
                            className={`nav-global-css ${pathname === item.link && 'nav-acive'}`}
                            href={item.link}
                            onClick={() => setOpen(false)}
                        >
                            {item.name}
                        </Link>
                    )))}
            </div>
        </div>
    );
};

export default MobileNav;