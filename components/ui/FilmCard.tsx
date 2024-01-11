import Image from 'next/image';
import { motion } from 'framer-motion';

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
            className='mb-8 md:mb-12 lg:mb-16'
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
            }}
        >
            <div
                className='
                relative overflow-hidden rounded-md'
            >
                <Image
                    src={imageUrl}
                    alt={`${filmTitle} poster image`}
                    width={1920}
                    height={2400}
                    className='object-cover w-full h-full transition-transform duration-200 transform hover:scale-105 rounded-md'
                />
            </div>
            <div className='mt-3'>
                <h2 className='text-center text-lg lg:text-xl xl:text-2xl font-bold'>
                    {filmTitle}
                </h2>
                <p className='text-center text-gray-600'>{director}</p>
            </div>
        </motion.div>
    );
};

export default FilmCard;
