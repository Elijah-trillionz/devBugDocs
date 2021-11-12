import {ThemeProvider} from 'styled-components';
import Meta from '../components/Meta';
import GlobalStyles from '../components/styles/Global';
import {GlobalProvider} from '../context/global context/GlobalState';
import theme from '../theme.config';

function MyApp({Component, pageProps}) {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Meta/>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default MyApp;
