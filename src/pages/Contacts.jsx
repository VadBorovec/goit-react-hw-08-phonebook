import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { TaskList } from '../components/TaskList';
import { ContactForm } from 'components';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      {/* <TaskList /> */}
      <div>Taskks Liast</div>
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
