import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm';
import { Section } from 'components/ui';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Section title={'Login form'}>
        <LoginForm />
      </Section>
    </div>
  );
}
