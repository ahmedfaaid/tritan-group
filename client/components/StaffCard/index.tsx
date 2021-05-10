import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Card } from '../../styles/GlobalStyles';
import { theme as t } from '../../styles/Theme';
import { formatPhoneNumber } from '../../utils//general';

export type Member = {
  image: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  bio: string;
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
  const { image, name, title, email, phone, bio } = member;

  return (
    <Card onClick={() => setOpen()}>
      <span className='view-more'>Click to view more</span>
      <CardImage>
        <img
          src={
            image
              ? image
              : `https://via.placeholder.com/150/ff962d/ffffff?text=Tritan+Group`
          }
          alt={name}
        />
      </CardImage>
      <h5>{name}</h5>
      <p>{title}</p>
      <p>
        Phone:{' '}
        <a href={phone ? `tel:+1${phone}` : '#'}>
          {phone ? formatPhoneNumber(phone) : '...'}
        </a>
      </p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </Card>
  );
}
