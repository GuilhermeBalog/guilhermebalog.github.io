import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: {
        primary: string;
        secondary: string;
      };
      text: string;
      separator: string;
    };
  }
}
