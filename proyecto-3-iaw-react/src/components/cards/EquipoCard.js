import Card from "react-bootstrap/Card";
import { Button, ListGroup } from "react-bootstrap";
import { Icon } from "@iconify/react";
import EditarEquipo from "../modals/EditarEquipo";
import { useState } from "react";

export default function EquipoCard({ nombre, logo, nombre_estadio, capitan }) {
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [equipo, setEquipo] = useState({
    nombre: nombre,
    logo: logo,
    nombre_estadio: nombre_estadio,
    capitan: capitan,
  });

  const handleEditarEquipo = () => {
    setShowEditarModal(true);
  };

  return (
    <Card
      className="Card__content"
      style={{
        width: "18rem",
        borderRadius: "3em",
      }}
    >
      <Card.Img className="EquipoCard__img" variant="top" src={logo} />
      <Card.Body>
        <Card.Title className="EquipoCard__titulo">
          <h2>{nombre}</h2>
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {" "}
            Disputa sus partidos como local en el {nombre_estadio}
          </ListGroup.Item>
          <ListGroup.Item>Su capitán es {capitan}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
