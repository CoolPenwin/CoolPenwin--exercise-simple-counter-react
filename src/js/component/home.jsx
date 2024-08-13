
import React, { useState } from 'react';
import ContadorTotal from "./ContadorTotal.jsx";
import SimpleCounter from "./SimpleCounter.jsx";
import Footer from "./footer.jsx";
import TranslateButton from "./buttonTranslate.jsx";

//create your first component
const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
    <div>
      <TranslateButton 
        className="human-text" 
        buttonText="Tranlate to Terran" 
        onMouseDown={() => setIsPressed(true)} 
        onMouseUp={() => setIsPressed(false)} 
      />
      <ContadorTotal />
      <SimpleCounter isPressed={isPressed} />
      <Footer isPressed={isPressed} />
    </div>
    </>
  );
};

export default Home;



  


