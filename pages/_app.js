import "../styles/globals.css";
import { createContext, useState } from "react";

const StatesContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [states, setStates] = useState({});
  return (
    <StatesContext.Provider value={{ states, setStates }}>
      <Component {...pageProps} />
    </StatesContext.Provider>
  );
}

export default MyApp;
