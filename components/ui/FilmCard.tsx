import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface FilmCardProps {
    imageUrl: string;
    filmTitle: string;
    director: string;
    controls: any;
}

const FilmCard: React.FC<FilmCardProps> = ({
    imageUrl,
    filmTitle,
    director,
    controls,
}) => {
    return (
        <motion.div
            key={filmTitle}
            initial='hidden'
            animate={controls}
            className='mb-8 md:mb-12 lg:mb-16 hover:shadow-lg shadow-sm rounded-md transition-shadow'
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
            }}
        >
            <div
                className='
                relative overflow-hidden rounded-t-md'
            >
                <Link href={'#'}>
                    <Image
                        src={imageUrl}
                        alt={`${filmTitle} poster image`}
                        width={1920}
                        height={2400}
                        className='object-cover w-full h-full transition-transform duration-200 transform hover:scale-105'
                    />
                </Link>
            </div>
            <div className='my-2'>
                <h2 className='text-center text-base lg:text-xl xl:text-2xl font-bold line-clamp-1 overflow-ellipsis'>
                    <Link
                        href={'#'}
                        className='hover:text-gray-600 transition-colors'
                    >
                        {filmTitle}
                    </Link>
                </h2>

                <p className='text-center text-gray-600 line-clamp-1 overflow-ellipsis transition-colors'>
                    <Link href={'#'} className='hover:text-gray-300'>
                        {director}
                    </Link>
                </p>
            </div>
        </motion.div>
    );
};

export default FilmCard;
