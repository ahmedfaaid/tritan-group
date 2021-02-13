import 'styled-components';
import { DefaultTheme } from 'styled-components';

interface IColors {
  primary: string;
  blue: string;
  white: string;
  offWhite: string;
  black: string;
  ebony: string;
  lightPrimary: string;
  lightEbony: string;
  lightBlue: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
  }
}
