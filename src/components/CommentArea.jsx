import { Component } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2Mzk2NTY2MjYsImV4cCI6MTY0MDg2NjIyNn0.VuWkl8UfKBY7_7rPkDzvgeCqdVYWDfCZJu7KgRKboZE",
          },
        }
      );
      if (response.ok) {
        // console.log(response);
        let comments = await response.json();
        this.setState({ comments: comments });
      }
    } catch (err) {
      alert("Fetch failed");
    }
  };
  componentDidMount = async () => {
    this.fetchComments();
  };
  render() {
    return (
      <div>
        <AddComment id={this.props.asin} />
        <Comment comments={this.state.comments} />
      </div>
    );
  }
}
export default CommentArea;
