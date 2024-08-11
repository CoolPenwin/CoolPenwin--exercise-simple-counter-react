import React, { useState, useEffect } from "react";

const SimpleCounter = () => {
  const [segundos, setSegundos] = useState(0);
  const digits = segundos.toString().split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="d-flex text-center justify-content-center ">
        {digits.map((digit, index) => (
          <div className="digito" key={index}>
            {digit}
          </div>
        ))}
      </div>
    </>
  );
};

export default SimpleCounter;
