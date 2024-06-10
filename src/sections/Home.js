import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #dcdcdc; /* Светло-серый фон */
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  color: #333; /* Темно-серый текст */
  height: 100vh;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #333; /* Темно-серый текст */
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-top: 10px;
  color: #666; /* Серый текст */
`;

const Home = ({ bgImage }) => {
  return (
    <HomeContainer bgImage={bgImage} id="home">
      <Title>АЛИСА ДМИТРИЧЕНКО</Title>
      <Subtitle>ЗБ-ПИ21-2</Subtitle>
    </HomeContainer>
  );
};

export default Home;
