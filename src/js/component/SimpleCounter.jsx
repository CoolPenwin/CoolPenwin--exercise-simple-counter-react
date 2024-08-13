import React, { useState, useEffect } from "react";
import cronometro from "../../img/cronometro.png";
import Swal from 'sweetalert2';


const SimpleCounter = ({ isPressed }) => {
  const [segundos, setSegundos] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Estado para saber si el contador está en marcha
  const [inputValue, setInputValue] = useState(""); // Estado para almacenar el valor del input

  const digits = segundos.toString().split("");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSegundos((prev) => {
          if (inputValue && prev > 0) {
            return prev - 1;
          } else if (!inputValue) {
            return prev + 1;
          } else {
            clearInterval(interval);
            alert=Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, inputValue]);

  // Función para iniciar el contador
  const handlePlay = () => {
    if (inputValue) {
      setSegundos(parseInt(inputValue, 10));
    }
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
      <div className=" d-flex text-center justify-content-center">
        {digits.map((digit, index) => (
          <div className="digito" key={index}>{digit}</div>
        ))}
        <img className="crono" src={cronometro} />
      </div>
      <div className={isPressed ? 'human-text' : 'font-aurabesh'}>
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
            placeholder="Set countdown"
          />
          <button onClick={handleSetCountdown}>Set Countdown</button>
        </div>
      </div>
    </>
  );
};

export default SimpleCounter;