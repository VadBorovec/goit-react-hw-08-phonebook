import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar, Footer } from 'components';
import { Container } from 'components/ui';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </Container>
  );
};
