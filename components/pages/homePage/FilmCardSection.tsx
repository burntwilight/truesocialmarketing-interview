import FilmCard from '../../ui/FilmCard';

interface FilmDetails {
    director: string;
    title: string;
}

interface FilmCardSectionProps {
    filmDetails: FilmDetails[];
}

const FilmCardSection: React.FC<FilmCardSectionProps> = ({
    filmDetails,
}: any) => {
    const imageUrls = [
        '/filmcard-images/starwars-1.jpg',
        '/filmcard-images/starwars-2.jpg',
        '/filmcard-images/starwars-3.jpg',
        '/filmcard-images/starwars-4.jpg',
        '/filmcard-images/starwars-5.jpg',
        '/filmcard-images/starwars-6.jpg',
    ];
    return (
        <section className='container'>
            <h2 className='mb-12'>Featured Starwars Movies</h2>
            <div
                className='
                grid-container
                grid grid-cols-3 gap-6
            '
            >
                {filmDetails.map((film: FilmDetails, index: number) => (
                    <FilmCard
                        key={film.title}
                        imageUrl={imageUrls[index]}
                        filmTitle={film.title}
                        director={film.director}
                    />
                ))}
            </div>
        </section>
    );
};

export default FilmCardSection;
