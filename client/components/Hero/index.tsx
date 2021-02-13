import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import Button from '../Button';

const HeroSection = styled.section`
  background-image: url('/scott-graham-5fNmWej4tAA-unsplash.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
  }
`;

const CTAText = styled.div`
  z-index: 2;
  text-align: center;

  h3 {
    font-size: 4.5rem;
    color: ${t.colors.white};
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 auto 2rem;
    letter-spacing: 1px;
    line-height: 1.2;
    max-width: 70%;

    @media (max-width: 425px) {
      font-size: 3.5rem;
      max-width: 90%;
    }
  }

  h4 {
    font-size: 3.5rem;
    margin: 0 auto 2rem;
    color: ${t.colors.white};
    font-weight: 600;
    text-transform: uppercase;

    @media (max-width: 425px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 2rem;
    color: ${t.colors.white};
    letter-spacing: 1px;
    line-height: 1.4;
    max-width: 60%;
    margin: auto;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (max-width: 425px) {
      max-width: 80%;
    }
  }

  div {
    margin-top: 3rem;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <CTAText>
        <h3>Bespoke solutions</h3>
        <h4>For talent acquisition</h4>
        <p>
          Whether you are a business looking to attract the best talent, or a
          giant talent seeking a new opportunity, Tritan Group is the partner
          you deserve.
        </p>
        <div>
          <Button text='Find your next career' to='talent' />
          <Button
            text='Looking for talent?'
            to='employers'
            background='ebony'
          />
        </div>
      </CTAText>
    </HeroSection>
  );
}
