// src/pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';
import HomePage from '../components/HomePage';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Toffehfhwhjhingg</title>
      </Head>
      <Header />
      <HomePage />
    </>
  );
};

export default Home;
