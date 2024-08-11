import React from "react";
import ContadorTotal from "./ContadorTotal.jsx";
import SimpleCounter from "./SimpleCounter.jsx";
import Botonera from "./Botonera.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <ContadorTotal />
      <SimpleCounter />
      <Botonera />
    </>
  );
};

export default Home;
