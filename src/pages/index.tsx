import Layout from '@/components/layout/Layout';
import HomePage from '@/sections/homePage';
import { gql } from '@apollo/client';
import * as React from 'react';

import { client } from '../lib/apollo';

export default function Home({ films }: any) {
    const filmDetails = films.map(({ node: { director, title } }: any) => ({
        director,
        title,
    }));
    return (
        <Layout>
            <HomePage filmDetails={filmDetails} />
        </Layout>
    );
}

export async function getStaticProps() {
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
