import { Button } from 'components/ui';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook - Home</title>
      </Helmet>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Phonebook manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <br />
        <Button>
          <NavLink to="/contacts">Tasks</NavLink>
        </Button>
      </div>
    </>
  );
}
