import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";

export default function EquipoCard({ nombre, logo, nombre_estadio, capitan }) {
  return (
    <Card
      className="Card__content"
      style={{
        width: "18rem",
        borderWidth: "3px",
        borderImage: "linear-gradient(to right, #94cfe9, #949de9) 1"
      }}
    >
      <Card.Img className="EquipoCard__img" variant="top" src={logo} />
      <Card.Body>
        <Card.Title className="Card__titulo">
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
