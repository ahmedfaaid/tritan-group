import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import Layout from '../../components/layout';
import ImageStrip from '../../components/ImageStrip';

const ServicesText = styled.div`
  width: 60%;
  margin: 5rem auto 5rem;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 100%;
    padding: 0 2rem;
  }

  div {
    box-shadow: 0 5px 10px -5px;
    margin: 5rem 0;
    padding: 2rem;
    border-radius: 1rem;
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
`;

export default function Services() {
  return (
    <Layout page='Services'>
      <section>
        <ImageStrip
          image='quickorder-LbInNgbm_Ts-unsplash.jpg'
          text='Services'
          variant='blue'
        />
        <ServicesText>
          <div>
            <h4>Payrolling</h4>
            <p>We offer flexible payrolling solutions that meet your needs.</p>
          </div>
          <div>
            <h4>Permanent Fulltime</h4>
            <p>
              Adding a new team member should not be done lightly. Using our
              customer focused approach, we will find the specific talent to
              enhance your business and team.
            </p>
          </div>
          <div>
            <h4>Contract & Temporary</h4>
            <p>
              Helping businesses maintain and increase productivity without
              increasing headcount. We can quickly provide you with talented
              short-term employees to support for your business requirements.
            </p>
          </div>
          <div>
            <h4>Executive Search</h4>
            <p>
              Great leadership is at the core of every successful organization.
              Using our industry connections and expertise, we find &amp;
              attract better executive talent. We create bespoke solutions best
              suited for your business. Our approach is guaranteed and connects
              you with visionary Industry executives with the proficiency to
              move your organization forward.
            </p>
          </div>
        </ServicesText>
      </section>
    </Layout>
  );
}
