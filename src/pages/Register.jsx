import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components';
import { Section } from 'components/ui';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Section title={'Register form'}>
        <RegisterForm />
      </Section>
    </div>
  );
}
