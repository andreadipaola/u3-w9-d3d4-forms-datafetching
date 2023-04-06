import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: ""
  };

  render() {
    return (
      <Container>
        <Row className="my-3">
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="gy-3">
          {this.props.books
            .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery))
            .map((book) => (
              <Col sm={6} md={4} lg={4} xl={3} xxl={3}>
                <SingleBook
                  asin={book.asin}
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  category={book.category}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
