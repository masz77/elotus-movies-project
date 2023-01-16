import "../styles/globals.css";
// import "antd/dist/antd.css";
import NavBar from "../components/NavBar";
import "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      {/* <div style={{ display: "flex" }}> */}
      {/* <NextNProgress /> */}
      {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
