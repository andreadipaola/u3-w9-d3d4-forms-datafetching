import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
const shuffledBooks = allBooks.sort((a, b) => 0.5 - Math.random()).splice(0, 16);

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className="gy-3">
          {shuffledBooks.map((book) => (
            <Col sm={6} md={4} lg={4} xl={3} xxl={3}>
              <Card
                className="border-0 shadow-lg"
                key={book.asin}
                style={{
                  color: "#fff",
                  background: "#282c34"
                }}
              >
                <Card.Img
                  variant="top"
                  src={book.img}
                  style={{ height: "500px", width: "auto", objectFit: "cover" }}
                  className="mb-auto"
                />
                <Card.Body>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Title className="text-truncate mb-4">{book.title}</Card.Title>
                  <Card.Text className="fs-3" variant="primary" style={{ color: "#61DBFB" }}>
                    {book.price} €
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
