import React, { useState, useEffect } from "react";
import cronometro from "../../img/cronometro.png";

const SimpleCounter = () => {
  const [segundos, setSegundos] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Estado para saber si el contador está en marcha
  const [inputValue, setInputValue] = useState(""); // Estado para almacenar el valor del input

  const digits = segundos.toString().split("");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]); // Dependencia en isRunning

  // Función para iniciar el contador
  const handlePlay = () => {
    setIsRunning(true);
  };

  // Función para pausar el contador
  const handlePause = () => {
    setIsRunning(false);
  };

  // Función para detener y resetear el contador
  const handleStop = () => {
    setIsRunning(false);
    setSegundos(0);
  };

  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Función para establecer la cuenta regresiva
  const handleSetCountdown = () => {
    setSegundos(parseInt(inputValue, 10));
    setIsRunning(false);
  };

  return (
    <>
      <div className="digito d-flex text-center justify-content-center">
        {digits.map((digit, index) => (
          <div className="digito" key={index}>{digit}</div>
        ))}
        <img className="crono" src={cronometro} />
      </div>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleSetCountdown}
          placeholder="Set countdown"
        />
        <button onClick={handleSetCountdown}>Set Countdown</button>
      </div>
    </>
  );
};

export default SimpleCounter;
