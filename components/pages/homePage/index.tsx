import Hero from './Hero';

const HomePage = ({ filmDetails }: any) => {
    return (
        <>
            <Hero filmDetails={filmDetails} />
        </>
    );
};

export default HomePage;
