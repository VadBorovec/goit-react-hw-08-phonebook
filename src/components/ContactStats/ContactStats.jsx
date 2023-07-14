import { useSelector } from 'react-redux';

import { selectContacts } from 'redux/contacts/selectors';

import { Box, Text } from './ContactStats.styled';

export const ContactStats = () => {
  const contacts = useSelector(selectContacts);

  const totalContactCount = contacts.length;

  return (
    <Box>
      <Text>Total contacts: {totalContactCount}</Text>
    </Box>
  );
};
