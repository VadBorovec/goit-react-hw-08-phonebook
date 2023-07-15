import React from 'react';
import { HeroWrap, Title, Text, Link } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroWrap>
      <Title>
        Introducing the Phonebook App: Your Digital Directory Revolution!
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
      <br />
      <Text>
        Say goodbye to the chaos of traditional contact management. Experience
        the power of organization at your fingertips. Discover a new way to
        streamline your contacts with our Phonebook App today:{' '}
        <Link to="/login">Phonebook Page</Link>
      </Text>
    </HeroWrap>
  );
};
