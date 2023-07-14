import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import shortid from 'shortid';
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
  phone: Yup.string()
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
      phone: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const contact = {
        id: shortid.generate(),
        name: values.name,
        phone: values.phone,
      };

      const existingName = contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );
      const existingNumber = contacts.find(
        contact =>
          contact.phone.replace(/[^\d]/g, '') ===
          values.phone.replace(/[^\d]/g, '')
      );

      if (existingName) {
        Notiflix.Notify.failure(
          `Contact with this name - ${values.name} already exists!`
        );
        return;
      } else if (existingNumber) {
        Notiflix.Notify.failure(
          `Contact with this number - ${values.phone} already exists!`
        );
        return;
      }

      dispatch(addContact(contact))
        .then(
          Notiflix.Notify.success(
            `${values.name} has been added to your phonebook`
          )
        )
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
      <Label htmlFor="phone">
        Number
        <Input
          type="tel"
          name="phone"
          placeholder="Enter number"
          {...formik.getFieldProps('phone')}
        />
        {formik.touched.phone && formik.errors.phone && (
          <Error>{formik.errors.phone}</Error>
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
//     const contactPhone = e.currentTarget.elements.phone.value;

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
//       <Label htmlFor="phone">
//         Number
//         <Input
//           type="tel"
//           name="phone"
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
// !====================without formik
// import { useDispatch, useSelector } from 'react-redux';
// import Notiflix from 'notiflix';

// import { addContact } from 'redux/operations';
// import { selectContacts, selectIsLoading } from 'redux/selectors';

// import { Spinner } from 'components';
// import { Button } from 'components/ui';
// import { StyledForm, Label, Input } from './ContactForm.styled';

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);

//   const handleSubmit = async e => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const contactName = form.elements.name.value;
//     const contactPhone = form.elements.phone.value;

//     const existingName = contacts.find(
//       contact => contact.name.toLowerCase() === contactName.toLowerCase()
//     );
//     const existingNumber = contacts.find(
//       contact => contact.phone === contactPhone
//     );

//     // * перестала працювати дана перевірка..раніше працювала
//     // const existingNumber = contacts.find(contact => {
//     //   const storedPhone = contact.phone.toLowerCase().replace(/\D/g, '');
//     //   const formPhone = contactPhone.toLowerCase().replace(/\D/g, '');
//     //   return storedPhone.includes(formPhone);
//     // });

//     if (existingName) {
//       Notiflix.Notify.failure(
//         `Contact with this name - ${contactName} already exists!`
//       );
//       return;
//     } else if (existingNumber) {
//       Notiflix.Notify.failure(
//         `Contact with this number - ${contactPhone} already exists!`
//       );
//       return;
//     }

//     if (!contactName || !contactPhone) {
//       Notiflix.Notify.warning('Please enter name and phone number');
//       return;
//     }

//     dispatch(
//       addContact({
//         name: contactName,
//         phone: contactPhone,
//       })
//     );

//     form.reset();
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
//           // required
//         />
//       </Label>
//       <Label htmlFor="phone">
//         Number
//         <Input
//           type="tel"
//           name="phone"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           placeholder="Enter number"
//           // required
//         />
//       </Label>
//       <Button type="submit" disabled={isLoading}>
//         {isLoading && <Spinner size={12} />}
//         Add contact
//       </Button>
//     </StyledForm>
//   );
// };
