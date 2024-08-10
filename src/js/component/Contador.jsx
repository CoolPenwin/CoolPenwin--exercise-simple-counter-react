import React, { useEffect, useState } from "react";

const Contador = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

useEffect(() => {
  setInterval(() => {
    setSegundos((prev) => prev + 1 )
  }, 1000);

},[])

useEffect(()=>{
if (segundos===60){
  setMinutos((prev) => prev + 1 )
  setSegundos(0)
}
if (minutos===60){
  setHoras((prev) => prev + 1)
  setMinutos(0)
}
},[segundos])




  return (
    <div className="d-flex">
      <div className="">{horas}</div>
      <div className="">{minutos}</div>
      <div className="">{segundos}</div>
    </div>
  );
};
export default Contador;
