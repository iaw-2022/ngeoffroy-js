import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import Jugador from "../../assets/jugador.png";

export default function EquipoCard({
  nombre,
  apellido,
  dni,
  puesto,
  sexo,
  fecha_nac,
}) {
  return (
    <Card
      className="Card__content"
      style={{
        width: "18rem",
        borderWidth: "3px",
        borderImage: "linear-gradient(to right, #94cfe9, #949de9) 1",
      }}
    >
      <Card.Img className="Card__img" variant="top" src={Jugador} />
      <Card.Body>
        <Card.Title className="Card__titulo">
          <h2 style={{ textAlign: "center" }}>
            {nombre} {apellido}
          </h2>
        </Card.Title>
        <ListGroup variant="flush"  className="JugadorCard__datos-text">
          <ListGroup.Item>
            {" "}
            Datos:
            <br />
            Dni: {dni} <br />
            Fecha de nacimiento: {fecha_nac} <br />
            Sexo: {sexo} <br />
            Puesto: {puesto} <br />
            Dni: {dni} <br />
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
