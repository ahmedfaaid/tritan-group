import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';
import DropDownItem from './DropDownItem';

const DropDownList = styled.ul`
  position: absolute;
  top: 6rem;
  z-index: 1;
  background-color: ${t.colors.blue};

  @media (max-width: 768px) {
    position: static;
    top: 0;
    z-index: 3;
    margin-left: 1rem;
  }

  @media (max-width: 425px) {
    margin-left: 0;
  }
`;

export default function DropDown({ items }) {
  return (
    <DropDownList>
      {items.map(({ name, to }) => (
        <DropDownItem key={to} to={to} name={name} />
      ))}
    </DropDownList>
  );
}
