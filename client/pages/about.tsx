import styled from 'styled-components';
import { theme as t } from '../styles/Theme';
import Button from '../components/Button';
import Layout from '../components/layout';
import StaffCard from '../components/StaffCard';
import ImageStrip from '../components/ImageStrip';
import ValuesCard from '../components/ValuesCard';

interface ISectionProps {
  background?: string;
}

interface ICardsProps {
  width?: number;
}

const AboutText = styled.div`
  width: 60%;
  margin: 5rem auto 5rem;

  p {
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 1.2;
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

const Cards = styled.div`
  display: flex;
  justify-content: center;
  width: 85rem;
  margin: auto;
  flex-wrap: wrap;
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
    <Layout>
      <section>
        <ImageStrip
          image='laura-davidson-QBAH4IldaZY-unsplash.jpg'
          text='About Tritan Group'
        />
        <AboutText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sed lacus a elit congue auctor. Vivamus posuere, justo ut imperdiet
            gravida, dolor metus vehicula tellus, ut scelerisque ex erat in
            nisl.
          </p>
          <p>
            Sed quam velit, congue in suscipit sodales, vulputate in dolor. Duis
            feugiat gravida dapibus. Praesent eros nisi, rhoncus sed odio in,
            laoreet aliquet massa. Ut pharetra sollicitudin sapien, quis
            faucibus mauris porttitor vel. Morbi sodales lacus vel ipsum auctor,
            tincidunt posuere lorem tempor. Praesent nec feugiat dolor, vitae
            posuere nibh. Mauris pulvinar auctor nisl ut venenatis. Aliquam
            sagittis ante id lacus dignissim, eu consequat risus faucibus.
            Aenean tristique massa quis magna mollis, nec posuere nisl
            tristique.
          </p>
          <p>
            In euismod iaculis dapibus. Aliquam ac neque volutpat, fringilla sem
            eu, finibus lectus. Nulla hendrerit sit amet eros sit amet auctor.
            Praesent rhoncus arcu nec convallis malesuada.
          </p>
          <div>
            <Button text='Contact' to='contact' border='black' />
          </div>
        </AboutText>
      </section>
      <CardSection background='offWhite'>
        <h4>Our Staff</h4>
        <Cards>
          {staff.map(({ image, name, title }) => (
            <StaffCard image={image} name={name} title={title} />
          ))}
        </Cards>
      </CardSection>
      <CardSection>
        <h4>Our Values</h4>
        <Cards>
          {values.map(({ value, text, image }) => (
            <ValuesCard value={value} text={text} image={image} />
          ))}
        </Cards>
      </CardSection>
    </Layout>
  );
}
