import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface IButtonProps {
  text: string;
  to: string;
  variant?: string;
}

interface IBtnProps {
  variant?: string;
}

const Btn = styled.a<IBtnProps>`
  font-size: 1.4rem;
  text-align: center;
  padding: 2rem 0;
  display: inline-block;
  width: 30rem;
  background-color: ${t.colors.primary};
  color: ${t.colors.white};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${t.colors.lightPrimary};
  }

  ${props => {
    switch (props.variant) {
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
`;

export default function Button({ text, to, variant }: IButtonProps) {
  return (
    <Link href={`/${to}`}>
      <Btn variant={variant}>{text.toUpperCase()}</Btn>
    </Link>
  );
}
