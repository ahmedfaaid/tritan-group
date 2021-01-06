import Link from 'next/link';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface IPostingCard {
  image: string;
  jobTitle: string;
  blurb: string;
  to: string;
}

const Card = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: ${t.colors.offWhite};
  box-shadow: 0 5px 10px -5px;

  &:not(:last-of-type) {
    margin-right: 5rem;
  }
`;

const ImageContainer = styled.div`
  margin: 0 auto 5rem;
  width: 100%;

  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
`;

const CardTextContainer = styled.div`
  padding: 0 2rem 2rem;

  h4 {
    color: ${t.colors.ebony};
    font-size: 2rem;
    margin-bottom: 4rem;
  }

  p {
    color: ${t.colors.lightEbony};
    font-size: 1.6rem;
    line-height: 1.2;
    margin-bottom: 2.5rem;
  }

  a {
    color: ${t.colors.darkPrimary};
    font-size: 1.6rem;
    text-decoration: none;
    transition: color 0.1s;

    &:hover {
      color: ${t.colors.ebony};
    }
  }
`;

export default function PostingCard({
  image,
  jobTitle,
  blurb,
  to
}: IPostingCard) {
  return (
    <Card>
      <ImageContainer>
        <img src={image} alt={jobTitle} />
      </ImageContainer>
      <CardTextContainer>
        <h4>{jobTitle}</h4>
        <p>{blurb}...</p>
        <Link href={`/jobs${to}`}>
          <a>Read More</a>
        </Link>
      </CardTextContainer>
    </Card>
  );
}
