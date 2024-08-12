import React from "react";
import ContadorTotal from "./ContadorTotal.jsx";
import SimpleCounter from "./SimpleCounter.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <ContadorTotal />
      <SimpleCounter />
      <Footer/>
    </>
  );
};

export default Home;
