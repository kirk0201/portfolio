import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default App;
