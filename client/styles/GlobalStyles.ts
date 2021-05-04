import styled, { createGlobalStyle } from 'styled-components';
import { theme as t } from './Theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1;
    min-height: 100vh;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  margin: 1rem auto;
  width: 40rem;
  height: 40rem;
  position: relative;
  text-align: center;
  border-radius: 1rem;
  color: ${t.colors.ebony};
  box-shadow: 0 5px 10px -5px;
  cursor: pointer;
  transition: box-shadow 0.2s;

  @media (max-width: 425px) {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 2px 10px -5px;
    background-color: ${t.colors.white};

    & span {
      color: ${t.colors.primary};
    }
  }

  h5 {
    font-size: 2.2rem;
    color: ${t.colors.primary};
    margin-bottom: 4rem;
  }

  span {
    font-size: 1.6rem;
    color: ${t.colors.lightEbony};
  }

  p {
    font-size: 1.8rem;
    line-height: 1.4;
    margin: 2rem 0;

    a {
      color: ${t.colors.blue};
    }
  }

  & .view-more {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    font-style: italic;
  }
`;
