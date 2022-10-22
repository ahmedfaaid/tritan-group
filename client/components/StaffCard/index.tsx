import styled from 'styled-components';
import { Card } from '../../styles/GlobalStyles';
import { formatPhoneNumber } from '../../utils//general';

export type Member = {
  id: number;
  attributes: {
    image: {
      data: {
        id: number;
        attributes: any;
      };
    };
    name: string;
    title: string;
    email: string;
    phone: string;
    bio: string;
  };
};

interface ICardProps {
  member: Member;
  setOpen: () => void;
}

const CardImage = styled.div`
  width: 12rem;
  height: 12rem;
  margin: 0 auto 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default function StaffCard({ member, setOpen }: ICardProps) {
  const { image, name, title, email, phone } = member.attributes;

  const handleChildClick = e => e.stopPropagation();

  console.log({ member });

  return (
    <Card onClick={() => setOpen()}>
      <span className='view-more'>Click to view more</span>
      <CardImage>
        <img
          src={
            process.env.NODE_ENV === 'production'
              ? image?.data.attributes.formats.thumbnail.url
              : `http://localhost:1337${image?.data.attributes.formats.thumbnail.url}`
          }
          alt={name}
        />
      </CardImage>
      <h5>{name}</h5>
      <p>{title}</p>
      <p>
        Phone:{' '}
        <a href={phone ? `tel:+1${phone}` : '#'} onClick={handleChildClick}>
          {phone ? formatPhoneNumber(phone) : '...'}
        </a>
      </p>
      <p>
        Email:{' '}
        <a href={`mailto:${email}`} onClick={handleChildClick}>
          {email}
        </a>
      </p>
    </Card>
  );
}
