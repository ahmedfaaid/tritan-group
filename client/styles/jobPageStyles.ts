import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme as t } from './Theme';

export const JobPost = styled.div`
  padding: 5rem;
  width: 90rem;
  margin: 2rem auto;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 375px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  & .title {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  & .location,
  .industry {
    display: inline-block;
    font-size: 1.6rem;
    color: ${t.colors.lightEbony};
  }

  & .industry {
    display: block;
    margin-bottom: 2rem;
  }

  & .horizontal-rule {
    margin: 2rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  & .summary,
  .benefits {
    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.5;

      @media (max-width: 425px) {
        font-size: 1.2rem;
      }
    }
  }

  & .duties,
  .qualifications {
    margin-top: 2rem;
    font-size: 1.4rem;
    line-height: 1.5;

    @media (max-width: 425px) {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      margin: 1rem 0;
    }

    ul {
      list-style: circle;

      li {
        margin: 0.5rem 0;
      }
    }
  }

  & .benefits {
    margin-top: 2rem;
  }

  & .contact {
    font-size: 1.4rem;
    line-height: 1.5;
    margin-top: 2rem;

    @media (max-width: 425px) {
      font-size: 1.2rem;
    }

    a {
      color: ${t.colors.blue};
    }
  }

  & .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.4rem;
    cursor: pointer;
    transition: color 0.1s;

    &:hover {
      color: ${t.colors.primary};
    }

    @media (max-width: 768px) {
      color: ${t.colors.primary};
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.6rem;
  color: ${t.colors.primary};
`;
