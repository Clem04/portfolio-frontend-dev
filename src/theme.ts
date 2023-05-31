import { DefaultTheme } from 'styled-components';

export interface Theme extends DefaultTheme {
  fonts: {
    primary: string;
    topSection: string;
    sectionHeader: string;
    skillsHeader: string;
    body: string;
    industries: string;
  };
  colors: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
  };
  fontWeights: {
    light: number;
    regular: number;
    semiRegular: number;
    medium: number;
    semiBold: number;
    bold: number;
  };
}
  
export const greenTheme: Theme = {
  fonts: {
    primary: 'Arial, sans-serif',
    topSection: 'Inria Sans, sans-serif',
    sectionHeader: 'League Gothic, sans-serif',
    skillsHeader: 'Jura, sans-serif', 
    body: 'Poppins, sans-serif', 
    industries: 'Yanone Kaffeesatz, sans-serif'
  },
  colors: {
    primary: '#073E27', 
    secondary: '#6DC19E', 
    white: '#FFFFFF', 
    black: '#000000' 
  },
  fontWeights: {
    light: 100,
    regular: 300,
    semiRegular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
};
  
export const blueTheme: Theme = {
  ...greenTheme,
  colors: {
    ...greenTheme.colors,
    primary: '#07093E',
    secondary: '#9094F6',
  },
};
  