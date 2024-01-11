import Image from 'next/image';

interface FilmCardProps {
    imageUrl: string;
    filmTitle: string;
    director: string;
}

const FilmCard: React.FC<FilmCardProps> = ({
    imageUrl,
    filmTitle,
    director,
}) => {
    return (
        <div key={filmTitle} className='mb-8 md:mb-12 lg:mb-16'>
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
        </div>
    );
};

export default FilmCard;
