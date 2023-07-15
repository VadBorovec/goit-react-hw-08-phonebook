import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar, Footer } from 'components';
import { Container } from 'components/ui';

const styles = {
  container: {
    minHeight: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main style={styles.container}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </Container>
  );
};
