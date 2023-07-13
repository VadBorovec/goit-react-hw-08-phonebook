import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

import { Spinner } from 'components';
import { Button } from 'components/ui';
import { Item, Name, Number } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Name>{name}</Name>
      <Number>{phone}</Number>
      <Button onClick={handleDelete} disabled={isLoading}>
        {isLoading && <Spinner size={12} />}
        Delete
      </Button>
    </Item>
  );
};

// !==============RTK Query==============
// import { Spinner } from 'components';
// import { Button } from 'components/ui';
// import { Item, Name, Number } from './ContactItem.styled';

// import { useDeleteContactMutation } from 'redux/rtkQuery';

// export const ContactItem = ({ id, name, phone }) => {
//   const [deleteTodo, { isLoading: isDeleting }] = useDeleteContactMutation();

//   return (
//     <Item>
//       <Name>{name}</Name>
//       <Number>{phone}</Number>
//       <Button onClick={() => deleteTodo(id)} disabled={isDeleting}>
//         {isDeleting && <Spinner size={12} />}
//         Delete
//       </Button>
//     </Item>
//   );
// };
// !=====================================
