import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import Layout from '../../components/layout';
import ImageStrip from '../../components/ImageStrip';

const ContactSection = styled.div`
  padding: 5rem;
`;

const TalentText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  margin: 1rem auto;
  width: 40rem;
  height: 40rem;
  text-align: center;
  border-radius: 1rem;
  color: ${t.colors.ebony};
  box-shadow: 0 5px 10px -5px;
  transition: box-shadow 0.2s;

  @media (max-width: 425px) {
    width: 80%;
  }

  &:hover {
    box-shadow: 0 2px 10px -5px;
    background-color: ${t.colors.white};
  }

  h5 {
    font-size: 2.2rem;
    color: ${t.colors.primary};
    margin-bottom: 4rem;
  }

  span {
    font-size: 1.6rem;
    color: ${t.colors.lightEbony};
  }

  p {
    font-size: 1.8rem;
    line-height: 1.4;
    margin: 2rem 0;

    a {
      color: ${t.colors.blue};
    }
  }
`;

export default function Talent() {
  return (
    <Layout page='Talent'>
      <section>
        <ImageStrip
          image='javier-allegue-barros-i5Kx0P8A0d4-unsplash.jpg'
          text='Talent'
        />
        <ContactSection>
          <TalentText>
            <h5>Michelle Goltman</h5>
            <span>Partner & Director of Business Development</span>
            <p>
              Phone: <a href='tel:+15877602432'>587-760-2432</a>
            </p>
            <p>
              Email:{' '}
              <a href='mailto:michelle.goltman@tritan.ca'>
                Michelle.Goltman@tritan.ca
              </a>
            </p>
          </TalentText>
        </ContactSection>
      </section>
    </Layout>
  );
}
