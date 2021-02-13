import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { theme as t } from '../../styles/Theme';
import DropDown from './DropDown';
import {
  sidenavAboutItems,
  sidenavTalentItems
} from '../../utils/dropdownItems';

interface ISideNav {
  show: boolean;
}

const SideList = styled.ul<ISideNav>`
  position: absolute;
  top: 0;
  right: 0;
  width: 30rem;
  height: 100vh;
  background-color: ${t.colors.blue};
  z-index: 3;
  padding-top: 10rem;
  padding-left: 4rem;
  ${props => {
    if (props.show) {
      return `
        display: block;
      `;
    } else {
      return `
        display: none;
      `;
    }
  }}
  transition: all 0.2s ease;

  span {
    text-decoration: none;
    color: ${t.colors.white};
    font-size: 1.8rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    text-transform: uppercase;
  }

  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
    padding-left: 0;
  }
`;

const ListItem = styled.li`
  margin: 4rem 0;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${t.colors.white};
  font-size: 1.8rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
`;

export default function SideNav({
  showSideNav,
  showAbout,
  showTalent,
  setShowAbout,
  setShowTalent
}) {
  return (
    <SideList show={showSideNav}>
      <ListItem>
        <Link href='/'>
          <NavLink>Home</NavLink>
        </Link>
      </ListItem>
      <ListItem>
        <span onClick={() => setShowAbout(!showAbout)}>
          About
          <Icon icon={faAngleDown} />
        </span>
        {showAbout && <DropDown items={sidenavAboutItems} />}
      </ListItem>
      <ListItem>
        <Link href='/employers'>
          <NavLink>Employers</NavLink>
        </Link>
      </ListItem>
      <ListItem>
        <span onClick={() => setShowTalent(!showTalent)}>
          Talent
          <Icon icon={faAngleDown} />
        </span>
        {showTalent && <DropDown items={sidenavTalentItems} />}
      </ListItem>
      <ListItem>
        <Link href='/contact'>
          <NavLink>Contact</NavLink>
        </Link>
      </ListItem>
    </SideList>
  );
}
