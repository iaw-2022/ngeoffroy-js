import React, { useState, useEffect } from "react";
import { loadLocalidades } from "../../utils/loaders";
import LocalidadCard from "../cards/LocalidadCard";
import { Row, Button } from "react-bootstrap";

export default function Localidades() {
  const [localidades, setLocalidades] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [localidadesFiltradas, setLocalidadesFiltradas] = useState([]);

  useEffect(() => {
    loadLocalidades(setLocalidades);
  }, [localidadesFiltradas]);

  const transformInput = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  const handleFiltrarLocalidades = (e) => {
    setInputBuscar(transformInput(e.target.value));
    const numberInput = parseInt(e.target.value,10) 
    let dataLocalidades = localidades.filter(
      (localidad) =>
        localidad.nombre === inputBuscar ||
        localidad.cod_postal === numberInput ||
        localidad.cant_habitantes === numberInput
    );
    setLocalidadesFiltradas(dataLocalidades);
  };

  return (
    <div className="Component__content">
      <div className="Buscar__div">
        <input
          type="text"
          className="Buscar-input"
          placeholder="Buscar localidades."
          aria-label=""
          aria-describedby="basic-addon1"
          onChange={(e) => handleFiltrarLocalidades(e)}
        ></input>
        <Button variant="btn btn-info" onClick={handleFiltrarLocalidades}>
          {" "}
          Buscar{" "}
        </Button>
      </div>
      <Row>
        {localidadesFiltradas.length > 0 &&
          localidadesFiltradas.map((localidad) => (
            <LocalidadCard
              nombre={localidad.nombre}
              cod_postal={localidad.cod_postal}
              cant_habitantes={localidad.cant_habitantes}
            />
          ))}
        {localidadesFiltradas.length === 0 &&
          localidades.map((localidad) => (
            <LocalidadCard
              nombre={localidad.nombre}
              cod_postal={localidad.cod_postal}
              cant_habitantes={localidad.cant_habitantes}
            />
          ))}
      </Row>
    </div>
  );
}
