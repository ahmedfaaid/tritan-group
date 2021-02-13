import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface ICardProps {
  image: string;
  value: string;
  text: string;
}

const Card = styled.div`
  padding: 2rem;
  margin: 1rem;
  width: 35rem;
  height: 40rem;
  text-align: center;
  border-radius: 1rem;
  color: ${t.colors.ebony};
  box-shadow: 0 5px 10px -5px;
  transition: box-shadow 0.2s;

  @media (max-width: 425px) {
    width: 80%;
  }

  &:hover {
    box-shadow: 0 2px 10px -5px;
    background-color: ${t.colors.white};
  }

  h5 {
    font-size: 1.8rem;
    color: ${t.colors.primary};
    margin-bottom: 4rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.4;
  }
`;

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

export default function ValuesCard({ image, value, text }: ICardProps) {
  return (
    <Card>
      <CardImage>
        <img src={`/${image}`} />
      </CardImage>
      <h5>{value}</h5>
      <p>{text}</p>
    </Card>
  );
}
