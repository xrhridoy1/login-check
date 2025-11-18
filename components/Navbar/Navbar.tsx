"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import { createClient } from '@/utils/supabase/client';
// import DarkMood from '../DarkMood/DarkMood';

export const navLink = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'About',
        link: '/about'
    },

]

interface UserMeta {
    display_name: string;
    email: string;
    email_verified: boolean;
    phone_verified: boolean;
    sub: string;
}

const Navbar = () => {
    const [userData, setUserData] = useState<UserMeta | null>(null)
    const pathname = usePathname()
    const router = useRouter();


    useEffect(() => {
        const fetchUser = async () => {
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUserData(user.user_metadata as UserMeta);
            } else {
                setUserData(null)
            }
        };
        fetchUser();
    }, []);


    const handleLogOut = async () => {
        setUserData(null)
        const supabase = createClient();
        const { error } = await supabase.auth.signOut()
        if (error) {
            router.push(`/confirm?message=something went wrong please try again`);
        } else {
            router.push('/login');
        }
    }
    console.log(userData)

    return (
        <div className='bg-blur-2xl fixed top-0 left-0 w-full border-b border-slate-100 hover:border-slate-200 dark:border-slate-900 dark:hover:border-slate-800 bg-white dark:bg-neutral-950 z-10' >
            <div className='main-width  flex items-center justify-between '>
                <div>
                    <Link href={'/'} className='text-3xl uppercase font-bold select-none py-3 inline-block'>Learning</Link>
                </div>
                <ul className=' gap-1 py-2 select-none hidden md:flex items-center'>

                    {
                        navLink.map((item, idx) => (
                            <Link
                                key={idx}
                                className={`nav-global-css ${pathname === item.link && 'nav-acive'}`}
                                href={item.link}>
                                {item.name}
                            </Link>
                        ))
                    }
                    {/* <DarkMood /> */}
                    {userData && (
                        <>
                            <li className='px-4 text-red-500'>{userData?.display_name}</li>
                            <li onClick={handleLogOut} className='cursor-pointer'>Log-out</li>
                        </>
                    )}
                </ul>
                <div className='md:hidden '>
                    <MobileNav />
                </div>
            </div>

        </div>
    );
};

export default Navbar;