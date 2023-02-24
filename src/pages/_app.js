import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import '../styles/remixicon.css'
import 'react-tabs/style/react-tabs.css';
import "swiper/css";
import "swiper/css/bundle";
import '../styles/chat.css'
import '../styles/globals.css'
import theme from '../styles/theme'
import Loading from "../components/loading/loading";

import { ThemeProvider } from "@mui/material";
import { CssBaseline } from '@mui/material';
import Layout from "../components/_App/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = localStorage.getItem("token");
      if (isLoggedIn) {
        //route to /
        router.push("/");
      } else {
        //route to /login
        router.push("/authentication/sign-in");
      }
    };
    handleLoggedIn();
  }, []);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  

  return isLoading ? <Loading /> : 
  (
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </ThemeProvider>
  );

  
}

export default MyApp
