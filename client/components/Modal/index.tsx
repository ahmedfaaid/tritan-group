import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dispatch,
  MouseEventHandler,
  MutableRefObject,
  SetStateAction,
  useRef
} from 'react';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import { formatPhoneNumber } from '../../utils/general';
import { Member } from '../StaffCard';

interface IModalProps {
  open: boolean;
  set: Dispatch<SetStateAction<boolean>>;
  selectedMember: Member;
}

interface IWrapperProps {
  open: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  ${props => {
    if (props.open) {
      return `
        display: flex;
      `;
    } else {
      return `
        display: none;
      `;
    }
  }}
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 60rem;
  min-height: 60rem;
  padding: 5rem 2rem;
  background-color: ${t.colors.white};
  position: relative;
  text-align: center;
  border-radius: 1rem;

  @media (max-width: 425px) {
    width: 100%;
  }

  h5 {
    font-size: 2.2rem;
    color: ${t.colors.primary};
    margin-bottom: 4rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.4;
    margin: 2rem 0;

    a {
      color: ${t.colors.blue};
    }

    @media (max-width: 425px) {
      font-size: 1.6rem;
    }
  }

  & .bio {
    font-size: 1.6rem;
    text-align: left;
    color: ${t.colors.lightEbony};
    line-height: 1.5;
    margin-top: 3rem;

    @media (max-width: 425px) {
      font-size: 1.4rem;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${t.colors.primary};
  }
`;

const CardImage = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 0 auto 2rem;

  @media (max-width: 425px) {
    width: 10rem;
    height: 10rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default function Modal({ open, set, selectedMember }: IModalProps) {
  const modalRef = useRef();
  const teamMember = selectedMember?.attributes;

  const handleClose: MouseEventHandler<HTMLDivElement> = e => {
    if (modalRef.current === e.target) {
      set(!open);
    }
  };

  if (!selectedMember) {
    return null;
  }

  return (
    <Wrapper
      open={open}
      ref={modalRef as MutableRefObject<HTMLDivElement>}
      onClick={handleClose}
    >
      <Content>
        <Icon icon={faTimes} onClick={() => set(!open)} />
        <CardImage>
          <img
            src={
              process.env.NODE_ENV === 'production'
                ? teamMember?.image.data.attributes.formats.thumbnail.url
                : `http://localhost:1337${teamMember?.image.data.attributes.formats.thumbnail.url}`
            }
            alt={teamMember.name}
          />
        </CardImage>
        <h5>{teamMember.name}</h5>
        <p>{teamMember.title}</p>
        <p>
          Phone:{' '}
          <a href={`tel:+1${teamMember.phone}`}>
            {formatPhoneNumber(teamMember.phone)}
          </a>
        </p>
        <p>
          Email: <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
        </p>
        <p className='bio'>{teamMember.bio}</p>
      </Content>
    </Wrapper>
  );
}
