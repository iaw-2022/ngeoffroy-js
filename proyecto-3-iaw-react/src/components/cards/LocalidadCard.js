import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import ciudad from "../../assets/ciudad.jpg";

export default function LocalidadCard({ nombre, cod_postal, cant_habitantes }) {
  return (
    <Card
      className="Card__content"
      style={{
        width: "18rem",
        borderWidth: "3px",
        borderImage: "linear-gradient(to right, #94cfe9, #949de9) 1"
      }}
    >
      <Card.Img className="EquipoCard__img" variant="top" src={ciudad} />
      <Card.Body>
        <Card.Title className="Card__titulo">
          <h2>{nombre}</h2>
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {" "}
            El código postal de dicha ubicación es {cod_postal}
          </ListGroup.Item>
          <ListGroup.Item>¡{nombre} tiene {cant_habitantes} habitantes!</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
