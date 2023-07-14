import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { Container, Section } from 'components/ui';
import {
  Spinner,
  ContactForm,
  ContactFilter,
  ContactStats,
  ContactList,
} from 'components';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
        {isLoading && !error && <Spinner />}
        <ContactFilter />
        <ContactStats />
        <ContactList />
      </Section>
    </Container>
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
