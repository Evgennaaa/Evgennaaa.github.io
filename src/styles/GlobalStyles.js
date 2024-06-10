import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden; /* Убираем горизонтальную прокрутку */
    font-family: 'Arial', sans-serif;
    scroll-behavior: smooth;
    background-color: #f5f5dc; /* Бежевый фон */
    color: #333; /* Темно-серый текст */
  }

  #root {
    width: 100%;
    overflow-x: hidden; /* Убираем горизонтальную прокрутку для корневого элемента */
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0 5px;
  }

  section {
    scroll-snap-align: start;
    width: 100%; /* Убедимся, что секция занимает всю ширину экрана */
  }

  @media (max-width: 768px) {
    section {
      padding: 20px;
    }
  }
`;

export default GlobalStyles;
