import React from 'react';
import { HeroWrap, Title, Text, Link } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroWrap>
      <Title>
        Introducing the Phonebook App: Your Digital Directory Revolution!
        <span role="img" aria-label="Greeting icon">
          ☎️📜🧐 ➜ 🆕📲😎
        </span>
      </Title>
      <Text>
        Say goodbye to the chaos of traditional contact management.
        <br />
        Experience the power of organization at your fingertips.
        <br />
        Discover a new way to streamline your contacts with our App today:
        <br />
        <Link to="/login">Phonebook Page</Link>
      </Text>
    </HeroWrap>
  );
};
