import React, { useState, useEffect } from "react";
import { loadTorneos } from "../../utils/loaders";
import { Row, Button } from "react-bootstrap";
import TorneoCard from "../cards/TorneoCard";

export default function Localidades() {
  const [torneos, setTorneos] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [torneosFiltrados, setTorneosFiltrados] = useState([]);

  useEffect(() => {
    loadTorneos(setTorneos);
  }, [torneosFiltrados]);

  const transformInput = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  const handleFiltrarTorneos = (e) => {
    setInputBuscar(transformInput(e.target.value));
    let dataTorneos = torneos.filter(
      (torneo) =>
        torneo.nombre === inputBuscar ||
        torneo.fecha_fin === inputBuscar ||
        torneo.fecha_ini === inputBuscar
    );
    setTorneosFiltrados(dataTorneos);
  };

  return (
    <div className="Component__content">
      <div className="Buscar__div">
        <input
          type="text"
          className="Buscar-input"
          placeholder="Buscar torneos."
          aria-label=""
          aria-describedby="basic-addon1"
          onChange={(e) => handleFiltrarTorneos(e)}
        ></input>
        <Button variant="btn btn-info" onClick={handleFiltrarTorneos}>
          {" "}
          Buscar{" "}
        </Button>
      </div>
      <Row>
        {torneosFiltrados.length > 0 &&
          torneosFiltrados.map((torneo) => (
            <TorneoCard
              key={torneo.id}
              nombre={torneo.nombre}
              logo={torneo.logo}
              fecha_ini={torneo.fecha_ini}
              fecha_fin={torneo.fecha_fin}
            />
          ))}

        {torneosFiltrados.length === 0 &&
          torneos.map((torneo) => (
            <TorneoCard
              key={torneo.id}
              nombre={torneo.nombre}
              logo={torneo.logo}
              fecha_ini={torneo.fecha_ini}
              fecha_fin={torneo.fecha_fin}
            />
          ))}
      </Row>
    </div>
  );
}
