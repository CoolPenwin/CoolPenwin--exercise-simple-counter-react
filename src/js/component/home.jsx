
import React, { useState } from 'react';
import ContadorTotal from "./ContadorTotal.jsx";
import SimpleCounter from "./SimpleCounter.jsx";
import Footer from "./footer.jsx";
import TranslateButton from "./buttonTranslate.jsx";

import ExcuseMoi_Button from './BotonVistaMejoras.jsx';
import FooterCool from './footer cool.jsx';



//create your first component
const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [showImprovements, setShowImprovements] = useState(false);
  const toggleImprovements = () => {
    setShowImprovements(!showImprovements);}

  return (
    <>
    <div>
      <div className="human-text" >

        <ExcuseMoi_Button     
        showImprovements={showImprovements} 
        toggleImprovements={toggleImprovements} 
        />

      </div>
      {!showImprovements && (
  <div className="human-text">
    <SimpleCounter isPressed={true} />
    {/* Otros componentes básicos */}
    <Footer isPressed={true} />

  </div>
)}
      
      {showImprovements && (
        <>
        <TranslateButton 
          className="human-text" 
          buttonText="Translate to Terran" 
          onMouseDown={() => setIsPressed(true)} 
          onMouseUp={() => setIsPressed(false)} 
        />
        
        <ContadorTotal />
        <SimpleCounter isPressed={isPressed} />
        <FooterCool isPressed={isPressed} />

        </>
      )}
    </div>
    </>
  );
};

export default Home;


// const MainComponent = () => {
//   const [showImprovements, setShowImprovements] = useState(false);
//   const [isPressedButton1, setIsPressedButton1] = useState(false);
//   const [isPressedButton2, setIsPressedButton2] = useState(false);

//   const toggleImprovements = () => {
//     setShowImprovements(!showImprovements);
//   };

//   return (
//     <div>
//       <TranslateButton 
//         className="human-text" 
//         buttonText="Tranlate to Terran" 
//         onMouseDown={() => setIsPressedButton1(true)} 
//         onMouseUp={() => setIsPressedButton1(false)} 
//       />
//       <ContadorTotal />
//       {showImprovements && (
//         <>
//           <SimpleCounter isPressed={isPressedButton1} />
//           <Footer isPressed={isPressedButton1} />
//         </>
//       )}
//       <ImprovementButton 
//         showImprovements={showImprovements} 
//         toggleImprovements={toggleImprovements} 
//       />
//       <TranslateButton 
//         className="human-text" 
//         buttonText="Otro Botón" 
//         onMouseDown={() => setIsPressedButton2(true)} 
//         onMouseUp={() => setIsPressedButton2(false)} 
//       />
//       <SimpleCounter isPressed={isPressedButton2} />
//       <Footer isPressed={isPressedButton2} />
//     </div>
//   );
// };

// export default MainComponent;
  


