import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

const Container = styled.div`
  background-color: ${t.colors.offWhite};
  position: relative;
  width: 100%;

  @media (max-width: 425px) {
    text-align: center;
  }
`;

const FootContact = styled.div`
  width: 70%;
  height: 35rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;

  h4 {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${t.colors.ebony};
    margin-bottom: 2rem;
  }

  @media (max-width: 425px) {
    display: block;
    padding: 2rem 0;
    height: auto;
  }
`;

const Links = styled.div`
  @media (max-width: 425px) {
    margin-top: 10rem;
  }

  li {
    margin: 1rem 0;

    a {
      text-decoration: none;
      color: ${t.colors.ebony};
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;
      text-transform: uppercase;
      transition: color 0.2s;

      &:hover {
        color: ${t.colors.lightPrimary};
      }
    }
  }
`;

const Address = styled.div`
  @media (max-width: 425px) {
    margin-top: 2rem;
  }

  p {
    margin: 1rem 0;
    color: ${t.colors.ebony};
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;

    a {
      color: ${t.colors.primary};
      font-size: 1.2rem;
      cursor: pointer;
      margin-left: 0.5rem;

      &:hover {
        color: ${t.colors.lightPrimary};
      }
    }
  }
`;

const Logo = styled.div`
  position: absolute;
  width: 10rem;
  right: 5rem;
  top: 50%;
  transform: translateY(-50%);

  img {
    width: 100%;
  }

  @media (max-width: 425px) {
    top: 2rem;
    right: 50%;
    transform: translate(50%, 0);
  }
`;

export default function FooterContact() {
  return (
    <Container>
      <FootContact>
        <Links>
          <h4>Links</h4>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/employers'>
                <a>Employers</a>
              </Link>
            </li>
            <li>
              <Link href='/talent'>
                <a>Talent</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </Links>
        <Address>
          <h4>Our Address</h4>
          <p>Edmonton, AB</p>
          <p>T6J 2Y3</p>
          <p>Phone: 587-430-3790</p>
          <p>
            Email: <a href='info@tritangroup.ca'>info@tritangroup.ca</a>
          </p>
        </Address>
        <Logo>
          <img src='/transparent-triangle-logo-2.png' alt='Tritan Group' />
        </Logo>
      </FootContact>
    </Container>
  );
}
