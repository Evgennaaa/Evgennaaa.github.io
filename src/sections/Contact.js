import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f5f5dc; /* Бежевый фон */
  color: #333; /* Темно-серый текст */
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ContactLink = styled.a`
  font-size: 24px;
  color: #333;
  margin: 10px 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #ccc; /* Тонкая серая линия */
  margin: 0;
`;

const Contact = () => {
  return (
    <>
      <Divider />
      <ContactContainer id="contact">
        <SectionTitle>Contact Me</SectionTitle>
        <ContactLinks>
          <ContactLink href="https://vk.com/alisa_dmitrichenko">Вконтакте</ContactLink>
          <ContactLink href="https://t.me/evgennaaaa">Telegram</ContactLink>
          <ContactLink href="https://www.instagram.com/evgennaaa?igsh=dDN4cjBxcXh1djk4">Instagram</ContactLink>
        </ContactLinks>
      </ContactContainer>
    </>
  );
};

export default Contact;
