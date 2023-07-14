import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Layout, PrivateRoute, RestrictedRoute, Spinner } from 'components';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// !==============RTK Query==============
// import { useFetchContactsQuery } from 'redux/rtkQuery';
// import { Container, Section } from 'components/ui';
// import { Spinner, ContactForm, ContactList } from 'components';

// export const App = () => {
//   const { data: contacts, isFetching } = useFetchContactsQuery();

//   return (
//     <Container>
//       <Section title="Phonebook">
//         <ContactForm />
//         {isFetching && <Spinner />}
//         {contacts && <ContactList contacts={contacts} />}
//       </Section>
//     </Container>
//   );
// };
// !=====================================
