import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import Button from '../Button';
import PostingCard from '../PostingCard';

const FeaturedSection = styled.div`
  padding: 10rem 2rem;
  background-color: ${t.colors.white};

  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color: ${t.colors.ebony};
    margin-bottom: 5rem;
  }
`;

export default function FeaturedPostings() {
  const postings = [
    {
      image: '/austin-distel-_S7-KX8geL0-unsplash.jpg',
      jobTitle: 'Project Manager',
      blurb:
        'Etiam feugiat nisi in condimentum volutpat. Quisque ut dictum nulla. In',
      to: '/project-manager'
    },
    {
      image: '/austin-distel-rxpThOwuVgE-unsplash.jpg',
      jobTitle: 'VP - Marketing',
      blurb:
        'Suspendisse id vulputate odio, eget auctor nisi. Nullam gravida nibh in leo',
      to: '/vp-marketing'
    },
    {
      image: '/christopher-gower-m_HRfLhgABo-unsplash.jpg',
      jobTitle: 'Software Developer',
      blurb:
        'Ut lobortis ligula vel lacinia rhoncus. Suspendisse cursus molestie',
      to: '/software-developer'
    }
  ];
  return (
    <FeaturedSection>
      <h2>Featured Job Postings</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {postings.map(({ image, jobTitle, blurb, to }) => (
          <PostingCard
            image={image}
            jobTitle={jobTitle}
            blurb={blurb}
            to={to}
            key={image}
          />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <Button text='View All Postings' to='jobs' border='black' />
      </div>
    </FeaturedSection>
  );
}
