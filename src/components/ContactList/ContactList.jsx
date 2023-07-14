import { useSelector } from 'react-redux';

import { visibleContacts } from 'redux/contacts/selectors';

import { ContactItem } from 'components';
import { Text } from 'components/ui';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <List>
      {contacts && contacts.length === 0 ? (
        <Text textAlign="center">There are no any numbers...</Text>
      ) : (
        <>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </>
      )}
    </List>
  );
};

// !==============RTK Query==============
// import { ContactItem } from 'components';
// import { Text } from 'components/ui';
// import { List } from './ContactList.styled';

// export const ContactList = ({ contacts }) => {
//   return (
//     <List>
//       {contacts && contacts.length === 0 ? (
//         <Text textAlign="center">There are no any numbers...</Text>
//       ) : (
//         <>
//           {contacts.map(({ id, name, phone }) => (
//             <ContactItem key={id} id={id} name={name} phone={phone} />
//           ))}
//         </>
//       )}
//     </List>
//   );
// };
// !=============
