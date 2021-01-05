import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface IButtonProps {
  text: string;
  to: string;
}

const Btn = styled.a`
  font-size: 1.4rem;
  padding: 2rem 0;
  display: inline-block;
  width: 30rem;
  background-color: ${t.colors.primary};
  color: ${t.colors.white};
  border: 1px solid ${t.colors.white};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${t.colors.darkPrimary};
  }
`;

export default function Button({ text, to }: IButtonProps) {
  return (
    <Link href={`/${to}`}>
      <Btn>{text.toUpperCase()}</Btn>
    </Link>
  );
}
