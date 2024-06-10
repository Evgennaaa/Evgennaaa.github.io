import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../assets/profile.jpg';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f5f5dc; /* Бежевый фон */
  color: #333; /* Темно-серый текст */
  width: 100%;
  box-sizing: border-box;
`;

const ImageAndContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ContentWrapper = styled.div`
  flex: 2;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: left;
  color: #666;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <SectionTitle>About Me</SectionTitle>
      <ImageAndContentWrapper>
        <ImageWrapper>
          <Image src={ProfileImage} alt="Profile" />
        </ImageWrapper>
        <ContentWrapper>
          <Content>
          Я студентка третьего курса Финансового университета, направление «Прикладная информатика». 
          Сейчас я особенно увлечена изучением статистики, теории вероятностей и языка программирования Python.  В ближайшее время я планирую начать свою карьеру в сфере аналитики данных и программирования!
          Ранее я получала образование в РЭУ имени Г.В. Плеханова по направлению «Финансы и кредит». 
          Мой профессиональный опыт начался в компании СЗ ПИК, где я за 4 года прошла путь от администратора до лидера команды направления чатов-продаж. В этой роли я руководила командой, координировала проекты и работала над улучшением уровня обслуживания клиентов. Этот опыт помог мне развить лидерские качества, навыки управления проектами и коммуникации.
          </Content>
        </ContentWrapper>
      </ImageAndContentWrapper>
    </AboutContainer>
  );
};

export default About;
