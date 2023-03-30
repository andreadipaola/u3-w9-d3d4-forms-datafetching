import { Container } from "react-bootstrap";

const Welcome = () => (
  <div className="p-5 my-5" style={{ color: "#fff", background: "#282c34" }}>
    <Container fluid className="py-5">
      <h1 className="display-5 fw-bold">&#128218; Andrea's bookshop</h1>
      <hr className="my-4"></hr>
      <p style={{ color: "#61DBFB" }} className="col-md-8 fs-4 lead">
        SAVE UP TO 70% ON MANY ARTICLES
      </p>
    </Container>
  </div>
);

export default Welcome;
