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

  const handleFiltrarLocalidades = (e) => {
    setInputBuscar(e.target.value);
    let dataLocalidades = localidades.filter(
      (localidad) =>
        localidad.nombre === inputBuscar ||
        localidad.cod_postal === inputBuscar ||
        localidad.cant_habitantes === inputBuscar
    );
    setLocalidadesFiltradas(dataLocalidades);
  };

  return (
    <div className="Component__content">
      <input
        type="text"
        className="Buscar-input"
        placeholder="Buscar localidades."
        aria-label=""
        aria-describedby="basic-addon1"
        onChange={(e) => handleFiltrarLocalidades(e)}
      ></input>
      <Button variant="outline-info" onClick={handleFiltrarLocalidades}>
        {" "}
        Buscar{" "}
      </Button>
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
