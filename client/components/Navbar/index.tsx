import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

const Navigation = styled.nav`
  background-color: ${t.colors.offWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;

  ul {
    margin-right: 1.5rem;
    display: flex;
  }
`;

const Logo = styled.div`
  width: 12rem;
  margin-left: 2.5rem;

  img {
    width: 100%;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${t.colors.ebony};
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover {
    color: ${t.colors.primary};
  }
`;

export default function Navbar() {
  return (
    <Navigation>
      <Logo>
        <Link href='/'>
          <img src='/transparent-logo.png' alt='Tritan Group' />
        </Link>
      </Logo>
      <ul>
        <li>
          <Link href='/about'>
            <NavLink>About Us</NavLink>
          </Link>
        </li>
        <li>
          <Link href='/why'>
            <NavLink>Why Us?</NavLink>
          </Link>
        </li>
        <li>
          <Link href='/employers'>
            <NavLink>Employers</NavLink>
          </Link>
        </li>
        <li>
          <Link href='/jobs'>
            <NavLink>Job Postings</NavLink>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </ul>
    </Navigation>
  );
}
