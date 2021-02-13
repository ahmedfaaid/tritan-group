import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

const Item = styled.li`
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${t.colors.white};
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover {
    color: ${t.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    color: ${t.colors.primary};
  }
`;

export default function DropDownItem({ to, name }) {
  return (
    <Item>
      <Link href={to}>
        <NavLink>{name}</NavLink>
      </Link>
    </Item>
  );
}
