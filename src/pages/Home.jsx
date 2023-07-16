import { Helmet } from 'react-helmet';
import { Hero } from 'components';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook - Home</title>
      </Helmet>
      <Hero />
    </>
  );
}
