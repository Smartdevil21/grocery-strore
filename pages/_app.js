import "../styles/globals.css";
import { createContext, useEffect, useState } from "react";

export const StatesContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [states, setStates] = useState({
    cart: [],
    user: {},
  });

  return (
    <StatesContext.Provider value={{ states, setStates }}>
      <Component {...pageProps} />
    </StatesContext.Provider>
  );
}

export default MyApp;
