import FilmCardSection from './sections/FilmCardSection';
import Hero from './sections/Hero';

const HomePage = ({ filmDetails }: any) => {
    return (
        <>
            <Hero />
            <FilmCardSection filmDetails={filmDetails} />
        </>
    );
};

export default HomePage;
