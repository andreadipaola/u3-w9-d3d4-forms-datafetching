import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => (
  <Container>
    <Row className="gy-3">
      {props.books.map((book) => (
        <Col sm={6} md={4} lg={4} xl={3} xxl={3}>
          <SingleBook asin={book.asin} img={book.img} title={book.title} price={book.price} category={book.category} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;
