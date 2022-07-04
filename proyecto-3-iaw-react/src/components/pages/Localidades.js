import React, { useState, useEffect } from "react";
import { loadLocalidades } from "../../utils/loaders";
import LocalidadCard from "../cards/LocalidadCard";
import { Row, Button } from "react-bootstrap";

export default function Localidades() {
  const [localidades, setLocalidades] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [localidadesFiltradas, setLocalidadesFiltradas] = useState([]);
  const [botonRestablecer, setBotonRestablecer] = useState(false);

  useEffect(() => {
    loadLocalidades(setLocalidades);
  }, [localidadesFiltradas]);

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
    setLocalidadesFiltradas([]);
  };

  const handleFiltrarLocalidades = () => {
    const dataTransform = transformInput(inputBuscar);
    const numberInput = parseInt(inputBuscar, 10);
    let dataLocalidades = localidades.filter(
      (localidad) =>
        localidad.nombre === dataTransform ||
        localidad.cod_postal === numberInput ||
        localidad.cant_habitantes === numberInput
    );
    setLocalidadesFiltradas(dataLocalidades);
    setBotonRestablecer(true);
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
          onChange={(e) => setInputBuscar(e.target.value)}
        ></input>
        {!botonRestablecer && (
          <Button variant="btn btn-info" onClick={handleFiltrarLocalidades}>
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
