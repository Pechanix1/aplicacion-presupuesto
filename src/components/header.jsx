import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPresupeusto,
  setIsValidPresupuesto,

}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupeusto ? (
        <ControlPresupuesto
        gastos={gastos} 
        setGastos={setGastos}
        presupuesto={presupuesto} 
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default header;
