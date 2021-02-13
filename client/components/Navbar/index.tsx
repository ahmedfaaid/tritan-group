import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { theme as t } from '../../styles/Theme';
import DropDown from './DropDown';
import { aboutItems, talentItems } from '../../utils/dropdownItems';
import SideNav from './SideNav';
import Hamburger from './Hamburger';

const Navigation = styled.nav`
  background-color: ${t.colors.offWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
`;

const NavList = styled.ul`
  margin-right: 1.5rem;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  width: 20rem;
  margin-left: 2.5rem;
  cursor: pointer;

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

const Icon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
`;

export default function Navbar() {
  const [showAbout, setShowAbout] = useState(false);
  const [showTalent, setShowTalent] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const openDropDown = item => {
    if (item === 'about') {
      setShowAbout(true);
    }

    if (item === 'talent') {
      setShowTalent(true);
    }
  };

  const closeDropDown = item => {
    if (item === 'about') {
      setShowAbout(false);
    }

    if (item === 'talent') {
      setShowTalent(false);
    }
  };

  return (
    <Navigation>
      <Logo>
        <Link href='/'>
          <img src='/transparent-logo.png' alt='Tritan Group' />
        </Link>
      </Logo>
      <NavList>
        <li>
          <Link href='/'>
            <NavLink>Home</NavLink>
          </Link>
        </li>
        <li
          onMouseEnter={() => openDropDown('about')}
          onMouseLeave={() => closeDropDown('about')}
        >
          <Link href='/about'>
            <NavLink>
              About Us
              <Icon icon={faAngleDown} />
            </NavLink>
          </Link>
          {showAbout && <DropDown items={aboutItems} />}
        </li>
        <li>
          <Link href='/employers'>
            <NavLink>Employers</NavLink>
          </Link>
        </li>
        <li
          onMouseEnter={() => openDropDown('talent')}
          onMouseLeave={() => closeDropDown('talent')}
        >
          <Link href='/talent'>
            <NavLink>
              Talent
              <Icon icon={faAngleDown} />
            </NavLink>
          </Link>
          {showTalent && <DropDown items={talentItems} />}
        </li>
        <li>
          <Link href='/contact'>
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </NavList>
      <SideNav
        showSideNav={showSideNav}
        showAbout={showAbout}
        showTalent={showTalent}
        setShowAbout={setShowAbout}
        setShowTalent={setShowTalent}
      />
      <Hamburger showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
    </Navigation>
  );
}
