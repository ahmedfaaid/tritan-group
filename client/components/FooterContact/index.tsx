import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

const Container = styled.div`
  background-color: ${t.colors.lightEbony};
  position: relative;
  width: 100%;
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
    color: ${t.colors.white};
    margin-bottom: 2rem;
  }
`;

const Links = styled.div`
  li {
    margin: 1rem 0;

    a {
      text-decoration: none;
      color: ${t.colors.ebony};
      font-size: 1.2rem;
      cursor: pointer;
      text-transform: uppercase;
      transition: color 0.2s;

      &:hover {
        color: ${t.colors.primary};
      }
    }
  }
`;

const Address = styled.div`
  p {
    margin: 1rem 0;
    color: ${t.colors.ebony};
    font-size: 1.2rem;
    text-transform: uppercase;

    a {
      color: ${t.colors.white};
      font-size: 1.2rem;
      cursor: pointer;
      margin-left: 0.5rem;

      &:hover {
        color: ${t.colors.primary};
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
              <Link href='/why'>
                <a>Our Services</a>
              </Link>
            </li>
            <li>
              <Link href='/employers'>
                <a>Employers</a>
              </Link>
            </li>
            <li>
              <Link href='/jobs'>
                <a>Jobs</a>
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
          <p>6455 Macleod Trail SW</p>
          <p>Intersection of Macleod Trail and Glenmore Trail</p>
          <p>Calgary, AB</p>
          <p>T2H 0K8</p>
          <p>Phone: 555-555-5555</p>
          <p>
            Email: <a href='info@tritangroup.ca'>info@tritangroup.ca</a>
          </p>
        </Address>
        <Logo>
          <img src='/transparent-triangle-logo.png' alt='Tritan Group' />
        </Logo>
      </FootContact>
    </Container>
  );
}
