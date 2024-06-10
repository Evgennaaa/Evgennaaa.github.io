import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 My Portfolio.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
