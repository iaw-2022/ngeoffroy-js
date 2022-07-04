import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";

export default function LocalidadCard({ nombre, logo, fecha_ini, fecha_fin }) {
  return (
    <Card
      className="Card__content"
      style={{
        width: "18rem",
        borderWidth: "3px",
        borderImage: "linear-gradient(to right, #94cfe9, #949de9) 1"
      }}
    >
      <Card.Img className="Torneo__logo" variant="top" src={logo} />
      <Card.Body>
        <Card.Title className="Torneo__titulo">
          <h2>{nombre}</h2>
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {" "}
            La fecha de inicio del evento es el dia {fecha_ini}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            La fecha de finalización del evento es el dia {fecha_fin}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
