'use client'

import styles from '../styles/page.module.css';
import { FrontPage } from '@/components/home/FrontPage';
import { Content } from '@/components/home/Content';
import { Uniqueness } from '@/components/home/Uniqueness';
import { Video } from '@/components/home/Video';
import { Comunity } from '@/components/home/Comunity';
import { Discover } from '@/components/home/Discover';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://test.cryptomex.online/',
  // uri: 'http://20.237.38.79:8080/',
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  },
});

client
  .query({
    query: gql`
      query {
        getGummies(page: 1, pageSize: 100) {
          id
          bioma
          multi
          name
          tokenId
        }
      }
    `,
  })
  .then((result) => console.log("Result", result));

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.main}>
        <FrontPage />
        <Content />
        <Uniqueness />
        <Video />
        <Comunity />
        <Discover />
      </div>
    </ApolloProvider>
  )
}
