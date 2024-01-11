import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import navigations from '@/constants/navigations';

const MobileNavbar = ({ onClose }: any) => {
    return (
        <div className='z-20 fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-filter backdrop-blur-sm'>
            <motion.div
                className='p-6 absolute top-0 right-0 h-screen w-80 bg-white overflow-x-hidden overflow-y-scroll hide-scrollbar'
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.3, stiffness: 30 }}
            >
                <button
                    className='absolute top-4 right-4 z-20 w-12 h-12 text-2xl bg-white rounded-full flex items-center justify-center transition-all hover:bg-gray-300'
                    onClick={onClose}
                >
                    <Image width={36} height={36} src={'/x2.svg'} alt={'X'} />
                </button>
                <div className='mt-12'>
                    <nav className='flex flex-col'>
                        <ul className='my-auto gap-8 flex flex-col '>
                            {navigations.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={onClose}
                                >
                                    <li className='text-lg font-semibold leading-6 text-gray-900 hover:text-gray-400 transition-all'>
                                        {link.title}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </nav>
                </div>
            </motion.div>
        </div>
    );
};

export default MobileNavbar;
