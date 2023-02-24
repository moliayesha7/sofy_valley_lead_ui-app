import '../styles/remixicon.css'
import 'react-tabs/style/react-tabs.css';
import "swiper/css";
import "swiper/css/bundle";
import '../styles/chat.css'
import '../styles/globals.css'
import theme from '../styles/theme'

import { ThemeProvider } from "@mui/material";
import { CssBaseline } from '@mui/material';
import Layout from "../components/_App/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp
