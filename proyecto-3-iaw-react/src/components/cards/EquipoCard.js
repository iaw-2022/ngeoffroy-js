import Card from "react-bootstrap/Card";
import { Button, ListGroup } from "react-bootstrap";
import "./stylesCard.css";
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
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="EquipoListItem-img"
        variant="top"
        src={logo}
        style={{ borderRadius: 6 }}
      />
      <Card.Body>
        <Card.Title>
          <h2>{nombre}</h2>
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {" "}
            <Icon icon="mdi:home" style={{ color: "red" }} />
            Disputa sus partidos como local en el {nombre_estadio}
          </ListGroup.Item>
          <ListGroup.Item>Su capitán es {capitan}</ListGroup.Item>
        </ListGroup>
        <Button
          type="button"
          className="btn btn-warning"
          onClick={handleEditarEquipo}
        >
          Editar equipo
        </Button>
        <Button variant="danger">Borrar Equipo</Button>
      </Card.Body>
      {showEditarModal && (
        <EditarEquipo
          open={showEditarModal}
          setOpen={setShowEditarModal}
          equipo={equipo}
        />
      )}
    </Card>
  );
}
