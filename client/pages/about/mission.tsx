import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import ImageStrip from '../../components/ImageStrip';
import Layout from '../../components/layout';
import ValuesCard from '../../components/ValuesCard';

interface ISectionProps {
  background?: string;
}

interface ICardsProps {
  width?: number;
}

const CardSection = styled.section<ISectionProps>`
  padding: 3rem 0;
  ${props => {
    switch (props.background) {
      case 'offWhite':
        return `
          background-color: ${t.colors.offWhite};
        `;
      default:
        return `
          background-color: ${t.colors.white};
        `;
    }
  }}
  /* background-color: ${t.colors.offWhite}; */

  h4 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 10rem;
  }
`;

const Cards = styled.div<ICardsProps>`
  display: flex;
  justify-content: center;
  ${props => {
    if (props.width) {
      return `
        width: ${props.width}rem;
      `;
    } else {
      return `
        width: 85rem;
      `;
    }
  }}
  margin: auto;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    ${props => {
      if (props.width) {
        return `
        width: ${props.width - 20}rem;
      `;
      } else {
        return `
        width: 65rem;
      `;
      }
    }}
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Mission() {
  const values = [
    {
      value: 'Professionalism',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, erat et placerat congue, ipsum quam feugiat sapien, at vestibulum quam dui a odio.',
      image: 'hunters-race-MYbhN8KaaEc-unsplash.jpg'
    },
    {
      value: 'Experts',
      text:
        'Donec eget neque at tellus ornare dapibus. Morbi mollis ultricies enim, at bibendum justo. Proin condimentum eget justo at interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'alizee-baudez-npJkoTc0P8s-unsplash.jpg'
    },
    {
      value: 'Customer Focus',
      text:
        'Sed pretium magna est, in cursus felis suscipit sed. Fusce faucibus est leo, pretium pulvinar mi facilisis nec. Phasellus molestie viverra nunc, sed tincidunt magna aliquam ac.',
      image: 'blake-wisz-0mZIT-EcH5k-unsplash.jpg'
    }
  ];

  return (
    <Layout page='Our Mission'>
      <section>
        <ImageStrip
          image='ben-white-gEKMstKfZ6w-unsplash.jpg'
          text='Our Mission'
          variant='blue'
        />
        <CardSection>
          <h4>Our Values</h4>
          <Cards width={120}>
            {values.map(({ value, text, image }) => (
              <ValuesCard value={value} text={text} image={image} key={image} />
            ))}
          </Cards>
        </CardSection>
      </section>
    </Layout>
  );
}
