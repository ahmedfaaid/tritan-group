import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface IImageStripProps {
  image: string;
  text: string;
  variant?: string;
}

interface IImgProps {
  image: string;
  variant?: string;
}

const ImgStrip = styled.div<IImgProps>`
  width: 100%;
  height: 40rem;
  ${props => {
    return `
      background-image: url('/${props.image}');
    `;
  }}
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    ${props => {
      switch (props.variant) {
        case 'blue':
          return `
            background-color: ${t.colors.blue};
            opacity: 0.8;
          `;
        default:
          return `
            background-color: ${t.colors.primary};
            opacity: 0.8;
          `;
      }
    }}
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
  }

  h3 {
    z-index: 2;
    text-align: center;
    font-size: 6rem;
    color: ${t.colors.white};
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export default function ImageStrip({ image, text, variant }: IImageStripProps) {
  return (
    <ImgStrip image={image} variant={variant}>
      <h3>{text}</h3>
    </ImgStrip>
  );
}
