import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';

import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';

import { Spinner } from 'components';
import { Button } from 'components/ui';
import { StyledForm, Label, Input, Error } from './ContactForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const contact = {
        name: values.name,
        number: values.number,
      };

      const existingName = contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );
      const existingNumber = contacts.find(
        contact =>
          contact.number.replace(/[^\d]/g, '') ===
          values.number.replace(/[^\d]/g, '')
      );

      if (existingName) {
        Notiflix.Notify.failure(
          `Contact with this name - ${values.name} already exists!`
        );
        return;
      } else if (existingNumber) {
        Notiflix.Notify.failure(
          `Contact with this number - ${values.number} already exists!`
        );
        return;
      }

      dispatch(addContact(contact))
        .unwrap()
        .then(({ name }) => {
          Notiflix.Notify.success(`${name} has been added to your phonebook`);
        })
        .catch(error => console.log(error.message))
        .finally(resetForm());
    },
  });

  return (
    <StyledForm autoComplete="off" onSubmit={formik.handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <Error>{formik.errors.name}</Error>
        )}
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Enter number"
          {...formik.getFieldProps('number')}
        />
        {formik.touched.number && formik.errors.number && (
          <Error>{formik.errors.number}</Error>
        )}
      </Label>
      <Button type="submit" disabled={isLoading}>
        {isLoading && <Spinner size={12} />}
        Add contact
      </Button>
    </StyledForm>
  );
};

// !==============RTK Query==============
// import Notiflix from 'notiflix';
// import { Spinner } from 'components';
// import { Button } from 'components/ui';
// import { StyledForm, Label, Input } from './ContactForm.styled';
// import { useCreateContactMutation } from 'redux/rtkQuery';

// export const ContactForm = () => {
//   const [createContact, { isLoading }] = useCreateContactMutation();

//   const handleSubmit = async e => {
//     e.preventDefault();

//     const contactName = e.currentTarget.elements.name.value;
//     const contactPhone = e.currentTarget.elements.number.value;

//     if (!contactName || !contactPhone) {
//       Notiflix.Notify.warning('Please enter name and phone number');
//       return;
//     }

//     createContact({
//       contactName,
//       contactPhone,
//     });

//     e.currentTarget.reset();

//     Notiflix.Notify.success(`${contactName} has been added to  your phonebook`);
//   };

//   return (
//     <StyledForm autoComplete="off" onSubmit={handleSubmit}>
//       <Label htmlFor="name">
//         Name
//         <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           placeholder="Enter name"
//           required
//         />
//       </Label>
//       <Label htmlFor="number">
//         Number
//         <Input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           placeholder="Enter number"
//           required
//         />
//       </Label>
//       <Button type="submit" disabled={isLoading}>
//         {isLoading && <Spinner size={12} />}
//         Add contact
//       </Button>
//     </StyledForm>
//   );
// };
