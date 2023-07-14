// import { Button } from 'components/ui';
import { Helmet } from 'react-helmet';
// import { NavLink } from 'react-router-dom';
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
