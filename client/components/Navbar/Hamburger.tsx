import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface IButtonProps {
  showSideNav: boolean;
}

const StyledButton = styled.button<IButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3.5rem;
  height: 3.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 3rem;
  margin-bottom: 0.8rem;
  z-index: 4;

  &:focus {
    outline: none;
  }

  div {
    width: 3.5rem;
    height: 0.5rem;
    ${props => {
      if (props.showSideNav) {
        return `
          background: ${t.colors.primary};
        `;
      } else {
        return `
          background: ${t.colors.blue};
        `;
      }
    }}
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${props =>
        props.showSideNav ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${props => (props.showSideNav ? '0' : '1')};
      transform: ${props =>
        props.showSideNav ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${props =>
        props.showSideNav ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default function Hamburger({ showSideNav, setShowSideNav }) {
  return (
    <StyledButton
      showSideNav={showSideNav}
      onClick={() => setShowSideNav(!showSideNav)}
    >
      <div />
      <div />
      <div />
    </StyledButton>
  );
}
