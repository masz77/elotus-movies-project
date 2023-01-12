import "../styles/globals.css";
// import "antd/dist/antd.css";
import NavBar from "../components/NavBar";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
