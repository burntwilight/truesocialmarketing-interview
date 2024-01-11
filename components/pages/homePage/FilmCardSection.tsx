'use client';

import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

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
    const ref = useRef(null);

    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView]);

    const imageUrls = [
        '/filmcard-images/starwars-1.jpg',
        '/filmcard-images/starwars-2.jpg',
        '/filmcard-images/starwars-3.jpg',
        '/filmcard-images/starwars-4.jpg',
        '/filmcard-images/starwars-5.jpg',
        '/filmcard-images/starwars-6.jpg',
    ];
    return (
        <section ref={ref} className='container'>
            <h2 className='mb-12 font-bold'>Featured Movies</h2>
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
                        controls={mainControls}
                    />
                ))}
            </div>
            <div className='text-3xl text-center'>...</div>
        </section>
    );
};

export default FilmCardSection;
