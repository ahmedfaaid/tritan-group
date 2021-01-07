import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../styles/Theme';

const Copy = styled.div`
  background-color: ${t.colors.primary};
  padding: 2rem 0;
  text-align: center;
  font-size: 1.4rem;

  /* &:first-child {
    color: ${t.colors.white};
  } */
`;

const FooterLink = styled.a`
  color: ${t.colors.lightEbony};
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.1s;

  &:hover {
    color: ${t.colors.ebony};
  }
`;

export default function Footer() {
  return (
    <footer>
      <Copy>
        <span style={{ color: '#ffffff' }}>
          &#169; {new Date().getFullYear()} Tritan Group. All Rights Reserved.
        </span>
        <span>|</span>
        <Link href='privacy'>
          <FooterLink>Privacy Policy</FooterLink>
        </Link>
        <span>|</span>
        <Link href='terms'>
          <FooterLink>Terms & Conditions</FooterLink>
        </Link>
      </Copy>
    </footer>
  );
}
