import { FooterStyled } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <p>© {new Date().getFullYear()} Phonebook App. All rights reserved.</p>
    </FooterStyled>
  );
};
