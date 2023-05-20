export interface Theme {
    fonts: {
      primary: string;
      secondary: string;
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
    sizes: {
      xs: string;
      sm: string;
      smd: string;
      md: string;
      lg: string;
      mdlg: string;
      xl: string;
      xll: string;
    };
    fontWeights: {
      regular: number;
      light: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  }
  
  export const greenTheme: Theme = {
    fonts: {
      primary: 'Arial, sans-serif',
      secondary: 'Roboto, sans-serif',
      topSection: 'Inria Serif',
      sectionHeader: 'League Gothic',
      skillsHeader: 'Jura', 
      body: 'Kai', 
      industries: 'Karantina' 
    },
    colors: {
      primary: '#073E27', 
      secondary: '#6DC19E', 
      white: '#FFFFFF', 
      black: '#000000' 
    },
    sizes: {
      'xs': '12px',
      'sm': '14px',
      'smd': '16px',
      'md': '18px',
      'lg': '24px',
      'mdlg': '32px',
      'xl': '40px',
      'xll': '48px'
    },
    fontWeights: {
      regular: 300,
      light: 400,
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
  