import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import Button from '../../components/Button';
import Layout from '../../components/layout';
import ImageStrip from '../../components/ImageStrip';

const AboutText = styled.div`
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
    line-height: 1.5;
    color: ${t.colors.ebony};

    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }

  div {
    text-align: center;
    margin-top: 5rem;
  }
`;

export default function About() {
  return (
    <Layout page='About Us'>
      <section>
        <ImageStrip
          image='laura-davidson-QBAH4IldaZY-unsplash.jpg'
          text='About Tritan Group'
          variant='blue'
        />
        <AboutText>
          <h4>Your success is our business</h4>
          <p>
            We understand that no two individuals, offices, teams or businesses
            are the same. Yet, traditional recruitment agencies of all sizes
            operate with the same one-size-fits-all service model. This
            cookie-cutter approach often leads to the incorrect matching between
            talent and businesses. The result is that both clients and
            candidates are left frustrated in the process.
          </p>
          <p>
            Tritan Group was created to provide bespoke solutions that match our
            clients and candidates unique needs and circumstances. At Tritan, we
            take the time to understand our clients and candidates. We learn
            their needs, wants, motivations, and challenges in order to create a
            custom tailored recruitment solution. This in-depth knowledge
            ensures we place the precise individuals that fit into our clients
            strategic objectives.
          </p>
          <div>
            <Button text='Contact' to='contact' border='black' />
          </div>
        </AboutText>
      </section>
    </Layout>
  );
}
