import React from "react";
import Header from "../header/Header";
import Styles from "../../styles/components/wrapper.module.scss";
import Footer from "../footer/Footer";

function Wrapper({ children }) {
  return (
    <>
      <Header />
      <main className={Styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Wrapper;
