import styled from 'styled-components';
import { theme as t } from './Theme';

export const Blockquote = styled.blockquote`
  display: block;
  background: #fff;
  padding: 15px 20px 15px 45px;
  margin: 0 0 5rem;
  position: relative;
  font-family: Georgia, serif;
  font-size: 18px;
  line-height: 2;
  color: #666;
  box-shadow: 2px 2px 15px #ccc;
  border-left-style: solid;
  border-left-width: 15px;
  border-right-style: solid;
  border-right-width: 2px;
  border-left-color: ${t.colors.primary};
  border-right-color: ${t.colors.blue};

  &::before {
    content: '\201C';
    font-size: 60px;
    font-weight: bold;
    color: #999;
    position: absolute;
    left: 10px;
    top: 5px;
  }

  &::after {
    content: '';
  }

  span {
    font-style: italic;
  }
`;
