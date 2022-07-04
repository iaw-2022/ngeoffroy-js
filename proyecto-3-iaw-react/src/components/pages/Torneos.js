import React, { useState, useEffect } from "react";
import { loadTorneos } from "../../utils/loaders";
import { Row, Button } from "react-bootstrap";
import TorneoCard from "../cards/TorneoCard";

export default function Localidades() {
  const [torneos, setTorneos] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [torneosFiltrados, setTorneosFiltrados] = useState([]);
  const [botonRestablecer, setBotonRestablecer] = useState(false);

  useEffect(() => {
    loadTorneos(setTorneos);
  }, [torneosFiltrados]);

  const transformInput = (input) => {
    const splitStr = input.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

  const handleRestablecerFiltro = () => {
    setBotonRestablecer(false);
    setTorneosFiltrados([]);
  };

  const handleFiltrarTorneos = () => {
    const dataTransform = transformInput(inputBuscar);
    let dataTorneos = torneos.filter(
      (torneo) =>
        torneo.nombre === dataTransform ||
        torneo.fecha_fin === inputBuscar ||
        torneo.fecha_ini === inputBuscar
    );
    setTorneosFiltrados(dataTorneos);
    setBotonRestablecer(true);
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
          onChange={(e) => setInputBuscar(e.target.value)}
        ></input>
        {!botonRestablecer && (
          <Button variant="btn btn-info" onClick={handleFiltrarTorneos}>
            {" "}
            Buscar{" "}
          </Button>
        )}
        {botonRestablecer && (
          <Button
            variant="btn btn-success"
            onClick={handleRestablecerFiltro}
            style={{ marginLeft: "1em" }}
          >
            {" "}
            Restablecer filtros{" "}
          </Button>
        )}
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
