import { Card } from "react-bootstrap";

const SingleBook = (props) => (
  <Card
    className="border-0 shadow-lg"
    key={props.asin}
    style={{
      color: "#fff",
      background: "#282c34"
    }}
  >
    <Card.Img
      variant="top"
      src={props.img}
      style={{ height: "500px", width: "auto", objectFit: "cover" }}
      className="mb-auto"
    />
    <Card.Body>
      <Card.Text>{props.category}</Card.Text>
      <Card.Title className="text-truncate mb-4">{props.title}</Card.Title>
      <Card.Text className="fs-3" variant="primary" style={{ color: "#61DBFB" }}>
        {props.price} €
      </Card.Text>
    </Card.Body>
  </Card>
);

export default SingleBook;
