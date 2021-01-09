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
  }

  p {
    font-size: 2.2rem;
    color: ${t.colors.white};
    letter-spacing: 1px;
    line-height: 1.4;
    max-width: 60%;
    margin: auto;
  }

  div {
    margin-top: 3rem;

    a {
      &:not(:last-of-type) {
        margin-right: 1.8rem;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <CTAText>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Nulla dolor ante, posuere a fermentum quis, rutrum eu dui. Ut
          scelerisque ultrices odio quis convallis. Mauris tincidunt, turpis nec
          convallis ullamcorper, mauris nunc vulputate dui
        </p>
        <div>
          <Button text='Find your next career' to='jobs' />
          <Button text='Looking for talent?' to='employers' />
        </div>
      </CTAText>
    </HeroSection>
  );
}