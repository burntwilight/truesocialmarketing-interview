import { gql } from '@apollo/client';
import * as React from 'react';

import { client } from '../lib/apollo';
import HomePage from '../components/pages/homePage';

export default async function Home() {
    async function getStaticProps() {
        const GET_FILMS = gql`
            query ExampleQuery {
                allFilms {
                    edges {
                        node {
                            title
                            director
                        }
                    }
                }
            }
        `;

        const { data } = await client.query({
            query: GET_FILMS,
        });

        return {
            props: {
                films: data.allFilms.edges,
            },
            revalidate: 1,
        };
    }
    const {
        props: { films },
    } = await getStaticProps();
    const filmDetails = films.map(({ node: { director, title } }: any) => ({
        director,
        title,
    }));
    return <HomePage filmDetails={filmDetails} />;
}

{
    /* <link
rel="apple-touch-icon"
sizes="180x180"
href="/apple-touch-icon.png"
/>
<link
rel="icon"
type="image/png"
sizes="32x32"
href="/favicon-32x32.png"
/>
<link
rel="icon"
type="image/png"
sizes="16x16"
href="/favicon-16x16.png"
/> */
}
