import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './ThemeProvider';
import { greenTheme } from './theme';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    justify-content: center;
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
