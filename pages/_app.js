import { ThemeProvider } from "styled-components";
import Meta from "../components/Meta";
import GlobalStyles from "../components/styles/Global";
import { GlobalProvider } from "../context/global context/GlobalState";
import theme from "../theme.config";
import { DashboardProvider } from "../context/dashboard context/DashboardState";
import "../components/styles/prism.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <DashboardProvider>
        <ThemeProvider theme={theme}>
          <Meta />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </DashboardProvider>
    </GlobalProvider>
  );
}

export default MyApp;
