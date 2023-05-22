import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './ThemeProvider';
import { greenTheme } from './theme';
import { Theme } from './theme';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.primary};
  }
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={greenTheme}>
    <Helmet>
      <title>Clem Paiement Portfolio</title>
      <meta name="description" content="Frontend Developer Portfolio" />
    </Helmet>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
