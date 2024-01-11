'use client';

import { AnimatePresence } from 'framer-motion';
import navigations from '../../constants/navigations';
import CustomImage from '../Image';
import Link from 'next/link';
import { useState } from 'react';
import MobileNavbar from './Navbars/MobileNavbar';

import Image from "next/image"

const Header = () => {
    const [mobile, setMobile] = useState(false);

    const toggleMobile = () => {
        setMobile(!mobile);
    };

    const closeMobileNav = () => {
        setMobile(false);
    };

    return (
        <header>
            <nav className='container flex justify-between py-6'>
                <div className='flex lg:flex-1'>
                    <Link href='/'>
                        <CustomImage
                            className='h-8 w-40'
                            src='/logo.png'
                            alt='logo'
                        />
                    </Link>
                </div>
                <div className='hidden lg:flex lg:gap-x-12'>
                    {navigations.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className='text-sm font-semibold leading-6 text-gray-900'
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className="flex h-full lg:hidden">
                <button onClick={toggleMobile}>
                    <Image
                        src={"/menu.svg"}
                        width={24}
                        height={24}
                        alt="Menu"
                    />
                </button>
            </div>                
                <AnimatePresence>
                    {mobile && (
                        <div className='lg:hidden'>
                            <MobileNavbar onClose={closeMobileNav} />
                        </div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;
