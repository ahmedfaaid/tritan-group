import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { theme as t } from '../styles/Theme';
import Layout from '../components/layout';
import ImageStrip from '../components/ImageStrip';

const ContactSection = styled.div`
  padding: 10rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${t.colors.offWhite};

  @media (max-width: 768px) {
    display: block;
  }
`;

const ContactCard = styled.div`
  padding: 2rem;
  width: 40rem;
  height: 40rem;
  margin: 0 2.5rem;
  text-align: center;
  background-color: ${t.colors.white};
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  box-shadow: 0 5px 10px -5px;
  border-radius: 1rem;

  @media (max-width: 768px) {
    margin: 1.5rem auto;
  }

  @media (max-width: 425px) {
    width: 80%;
  }

  div {
    align-self: start;
  }

  h4 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 5rem;
  }

  p,
  a {
    font-size: 1.6rem;
    color: ${t.colors.lightEbony};
    line-height: 1.5;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 5rem;
  color: ${t.colors.primary};
`;

export default function Contact() {
  return (
    <Layout page='Contact Us'>
      <section>
        <ImageStrip
          image='julian-hochgesang-Dkn8-zPIbwo-unsplash.jpg'
          text='Contact Us'
        />
        <ContactSection>
          <ContactCard>
            <Icon icon={faMapMarkerAlt} />
            <div>
              <h4>Address</h4>
              <p>Edmonton, AB</p>
              <p>T6J 2Y3</p>
            </div>
          </ContactCard>
          <ContactCard>
            <Icon icon={faEnvelope} />
            <div>
              <h4>Email</h4>
              <a href='mailto:info@tritangroup.ca'>info@tritangroup.ca</a>
            </div>
          </ContactCard>
          <ContactCard>
            <Icon icon={faPhone} />
            <div>
              <h4>Phone</h4>
              <a href='tel:+15874303790'>+1 587-430-3790</a>
            </div>
          </ContactCard>
        </ContactSection>
      </section>
    </Layout>
  );
}
