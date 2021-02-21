import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import Layout from '../../components/layout';
import ImageStrip from '../../components/ImageStrip';

const IndustryText = styled.div`
  width: 60%;
  margin: 5rem auto 5rem;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 100%;
    padding: 0 2rem;
  }

  h4 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 5rem;

    @media (max-width: 425px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 1.5;
    color: ${t.colors.ebony};

    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }

  ul {
    margin-top: 5rem;

    li {
      font-size: 1.6rem;
      font-weight: 600;
      margin: 1rem 0;
      color: ${t.colors.primary};
    }
  }
`;

export default function Industries() {
  return (
    <Layout page='Industries'>
      <section>
        <ImageStrip
          image='avi-waxman-Lq9vlEn8Cl8-unsplash.jpg'
          text='Industries'
          variant='blue'
        />
        <IndustryText>
          <p>
            TRITAN Group has 35 years’ experience in the Recruitment business.
            We have the ability to customize our offerings based on our Client
            needs. Our diverse knowledge spans across a range of industries:
          </p>
          <ul>
            <li>Accounting and Finance</li>
            <li>Construction</li>
            <li>Engineering</li>
            <li>Light Industrial</li>
            <li>Property Management</li>
            <li>Office/Administration</li>
            <li>Skilled Trades</li>
          </ul>
        </IndustryText>
      </section>
    </Layout>
  );
}
