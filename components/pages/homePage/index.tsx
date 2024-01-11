import FilmCardSection from './FilmCardSection';
import Hero from './Hero';

const HomePage = ({ filmDetails }: any) => {
    return (
        <>
            <Hero />
            <FilmCardSection filmDetails={filmDetails} />
        </>
    );
};

export default HomePage;
