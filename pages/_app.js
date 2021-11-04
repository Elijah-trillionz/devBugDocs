import { ThemeProvider } from 'styled-components';
import Meta from '../components/Meta';
import GlobalStyles from '../components/styles/Global';
import theme from '../theme.config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
