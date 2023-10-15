import { ThemeProvider } from "next-themes";
import '../css/tailwind.css';
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
  return ( 
    <>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;
