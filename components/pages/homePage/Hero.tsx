import heroBackground from '@/public/hero-background.jpg';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className='relative h-screen overflow-hidden'>
            <div className='absolute inset-0'>
                <Image
                    src={heroBackground}
                    alt='Movie Theater Image'
                    className='object-cover w-full h-full'
                />
                <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>

            <div className='container mx-auto flex flex-col justify-center h-full relative z-10'>
                <h1 className='text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 text-center'>
                    Discover Your Favorite Starwars Movies
                </h1>

                <p className='text-lg lg:text-xl text-gray-300 mb-8 text-center'>
                    Dive into the expansive world of Star Wars movies. Explore
                    the epic saga across genres and find the perfect movie for
                    every mood in a galaxy far, far away
                </p>

                <div className='flex justify-center'>
                    <button className='bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300'>
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
