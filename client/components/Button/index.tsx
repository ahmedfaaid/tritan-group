import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface IButtonProps {
  text: string;
  to: string;
  border?: string;
  background?: string;
}

interface IBtnProps {
  border?: string;
  background?: string;
}

const Btn = styled.a<IBtnProps>`
  font-size: 1.4rem;
  text-align: center;
  padding: 2rem 0;
  display: inline-block;
  width: 30rem;
  color: ${t.colors.white};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:not(:last-of-type) {
    margin-right: 1.8rem;

    @media (max-width: 425px) {
      margin-right: auto;
      margin-bottom: 2rem;
    }
  }

  ${props => {
    switch (props.border) {
      case 'black':
        return `
          border: 1px solid ${t.colors.lightEbony};
        `;
      default:
        return `
          border: 1px solid ${t.colors.white}; 
        `;
    }
  }}

  ${props => {
    switch (props.background) {
      case 'ebony':
        return `
          background-color: ${t.colors.ebony};

          &:hover {
            background-color: ${t.colors.lightEbony};
          }
        `;
      default:
        return `
          background-color: ${t.colors.blue};

          &:hover {
            background-color: ${t.colors.lightBlue};
          }
        `;
    }
  }}

  @media (max-width: 425px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function Button({ text, to, border, background }: IButtonProps) {
  return (
    <Link href={`/${to}`}>
      <Btn border={border} background={background}>
        {text.toUpperCase()}
      </Btn>
    </Link>
  );
}
