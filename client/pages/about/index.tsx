import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import Button from '../../components/Button';
import Layout from '../../components/layout';
import StaffCard from '../../components/StaffCard';
import ImageStrip from '../../components/ImageStrip';
import ValuesCard from '../../components/ValuesCard';

interface ISectionProps {
  background?: string;
}

interface ICardsProps {
  width?: number;
}

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
    letter-spacing: 1px;
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

export default function About() {
  const staff = [
    {
      name: 'John Smith',
      title: 'Managing Partner',
      image: 'mohammad-faruque-SpIKPT8zeAs-unsplash.jpg'
    },
    {
      name: 'Tatiana Sam',
      title: 'Partner',
      image: 'omid-armin-xWVyLLUztv0-unsplash.jpg'
    },
    {
      name: 'Omar Ahmed',
      title: 'Recruiter',
      image: 'lucas-ruffiner-5bhlFXIm4GU-unsplash.jpg'
    },
    {
      name: 'Ryan Stills',
      title: 'Recruiter',
      image: 'wassim-chouak-X1fKWQM-GXY-unsplash.jpg'
    }
  ];

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
      {/* <CardSection background='offWhite'>
        <h4>Our Staff</h4>
        <Cards>
          {staff.map(({ image, name, title }) => (
            <StaffCard image={image} name={name} title={title} key={image} />
          ))}
        </Cards>
      </CardSection> */}
      <CardSection>
        <h4>Our Values</h4>
        <Cards width={120}>
          {values.map(({ value, text, image }) => (
            <ValuesCard value={value} text={text} image={image} key={image} />
          ))}
        </Cards>
      </CardSection>
    </Layout>
  );
}
