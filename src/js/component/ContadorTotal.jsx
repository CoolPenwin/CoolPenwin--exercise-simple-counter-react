import React, { useEffect, useState } from "react";

const ContadorTotal = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (segundos === 60) {
      setMinutos((prev) => prev + 1);
      setSegundos(0);
    }
    if (minutos === 60) {
      setHoras((prev) => prev + 1);
      setMinutos(0);
    }
  }, [segundos]);

  return (
    <div className="d-flex text-center justify-content-center ">
      <div className="num">{horas}</div> H<div className="num">{minutos}</div> M
      <div className="num">{segundos}</div> S
    </div>
  );
};
export default ContadorTotal;
