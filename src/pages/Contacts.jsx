import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import {
  ContactFilter,
  ContactForm,
  ContactList,
  ContactStats,
  Spinner,
} from 'components';
import { Section } from 'components/ui';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your phonebook</title>
      </Helmet>
      <Section title={'Phonebook'}>
        <ContactForm />
        {isLoading && !error && <Spinner />}
        <ContactFilter />
        <ContactStats />
        <ContactList />
      </Section>
    </>
  );
}

// ! ====

// import { fetchContacts } from 'redux/contacts/operations';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';

// export const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <Section title="Phonebook">
//         <ContactForm />
//         {isLoading && !error && <Spinner />}
//         <ContactFilter />
//         <ContactStats />
//         <ContactList />
//       </Section>
//     </Container>
//   );
// };
