import { Component } from "react";
import { Card } from "react-bootstrap";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjBjMWY4MWI0MjAwMTM5YjI3YzUiLCJpYXQiOjE2ODA1ODUyOTIsImV4cCI6MTY4MTc5NDg5Mn0.Dklb_mIn1UhIj-uQYZH0YjTZQmPYssEHga1U5MJHjXU";

//

// const SingleBook = (props) => (
//   <Card
//     className="border-0 shadow-lg"
//     key={props.asin}
//     style={{
//       color: "#fff",
//       background: "#282c34"
//     }}
//   >
//     <Card.Img
//       variant="top"
//       src={props.img}
//       style={{ height: "500px", width: "auto", objectFit: "cover" }}
//       className="mb-auto"
//     />
//     <Card.Body>
//       <Card.Text>{props.category}</Card.Text>
//       <Card.Title className="text-truncate mb-4">{props.title}</Card.Title>
//       <Card.Text className="fs-3" variant="primary" style={{ color: "#61DBFB" }}>
//         {props.price} €
//       </Card.Text>
//     </Card.Body>
//   </Card>
// );

class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Card
        key={`id: ${this.props.asin}`}
        className="border-0 shadow-lg"
        style={{
          color: "#fff",
          background: "#282c34"
        }}
        onClick={() => {
          console.log("abbiamo cliccato: " + this.props.title);
          this.setState({ selected: true });
          console.log(this.state.selected);
        }}

        // {this.state.selected === true && (
        //     className = "border border-danger"
        //   )};
      >
        <Card.Img
          variant="top"
          src={this.props.img}
          style={{ height: "500px", width: "auto", objectFit: "cover" }}
          className="mb-auto"
        />
        <Card.Body>
          <Card.Text>{this.props.category}</Card.Text>
          <Card.Title className="text-truncate mb-4">{this.props.title}</Card.Title>
          <Card.Text className="fs-3" variant="primary" style={{ color: "#61DBFB" }}>
            {this.props.price} €
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
