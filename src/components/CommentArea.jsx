import { Component } from "react";
import { Alert } from "react-bootstrap";

const api = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjBjMWY4MWI0MjAwMTM5YjI3YzUiLCJpYXQiOjE2ODA1ODUyOTIsImV4cCI6MTY4MTc5NDg5Mn0.Dklb_mIn1UhIj-uQYZH0YjTZQmPYssEHga1U5MJHjXU";
const headers = {
  headers: {
    Authorization: "Bearer" + token
  }
};

class CommentArea extends Component() {
  state = {
    comments: [],
    err: false,
    errMsg: ""
  };

  fecthReviews = async () => {
    try {
      const res = await fetch(api, headers);
      if (res.ok) {
        const fetchedReviews = await res.json();
        this.setState({ comments: fetchedReviews });
      } else {
        this.setState({ err: true });
      }
    } catch (err) {
      this.setState({ err: true, errMsg: err.message });
    }
  };

  componentDidMount() {
    this.fetchedReviews();
  }
  render() {
    return (
      <>
        {this.state.comments.lenght > 0 && <Commentlist comment={this.state.comments} />}
        {this.state.comments.lenght <= 0 && <Alert>There are no commnet yet.</Alert>}
        <AddComment id={this.props.id} />
      </>
    );
  }
}

export default CommentArea;
