'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import heroBackground from '@/public/hero-background.jpg';

const Hero = () => {
    /*  The commented out code 
        is the option for motion 
        on the hero section's load
     const h1Variants = {
         hidden: { x: '-100%', opacity: 0 },
         visible: { x: 0, opacity: 1 },
     }
     const pVariants = {
         hidden: { x: '200%', opacity: 0 },
         visible: {
             x: 0,
             opacity: 1,
             transition: {
                 delay: 0.25,
             },
         },
     }
     const buttonVariants = {
         hidden: { x: '-100%', opacity: 0 },
         visible: {
             x: 0,
             opacity: 1,
             transition: {
                 delay: 0.5,
             },
         },
     };
    */

    return (
        <motion.section
            initial='hidden'
            animate='visible'
            className='relative h-screen overflow-hidden'
        >
            <div className='absolute inset-0'>
                <Image
                    src={heroBackground}
                    alt='Movie Theater Image'
                    className='object-cover w-full h-full'
                />
                <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>

            <div className='container mx-auto flex flex-col justify-center h-full relative z-10'>
                <motion.h1
                    // variants={h1Variants}
                    className='text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 text-center'
                >
                    Discover Your Favorite Starwars Movies
                </motion.h1>

                <motion.p
                    // variants={pVariants}
                    className='text-lg lg:text-xl text-gray-300 mb-8 text-center'
                >
                    Dive into the expansive world of Star Wars movies. Explore
                    the epic saga across genres and find the perfect movie for
                    every mood in a galaxy far, far away
                </motion.p>

                <motion.div
                    // variants={buttonVariants}
                    className='flex justify-center'
                >
                    <button
                        className='
                    bg-red-500 
                    text-white 
                    px-6 
                    py-3 
                    rounded-full 
                    text-lg 
                    font-semibold 
                    hover:bg-red-600 
                    transition 
                    duration-300'
                    >
                        Get Started
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
