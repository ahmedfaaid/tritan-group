import styled from 'styled-components';
import { theme as t } from '../styles/Theme';
import ImageStrip from '../components/ImageStrip';
import Layout from '../components/layout';
import { Card } from '../styles/GlobalStyles';

const ContactSection = styled.div`
  padding: 5rem;

  @media (max-width: 425px) {
    padding: 2rem;
  }
`;

// const CardImage = styled.div`
//   width: 12rem;
//   height: 12rem;
//   margin: 0 auto 2rem;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 50%;
//   }
// `;

export default function Employers() {
  return (
    <Layout page='Employers'>
      <section>
        <ImageStrip
          image='alevision-co-fYyYz38bUkQ-unsplash.jpg'
          text='Employers'
        />
        <ContactSection>
          <Card>
            <h5>Hailey Mumby</h5>
            <span>Director of Business Development</span>
            <p>
              Phone: <a href='tel:+15879857609'>587-985-7609</a>
            </p>
            <p>
              Email:{' '}
              <a href='mailto:hailey.mumby@tritan.ca'>Hailey.Mumby@tritan.ca</a>
            </p>
          </Card>
        </ContactSection>
      </section>
    </Layout>
  );
}
