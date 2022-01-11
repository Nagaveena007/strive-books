import { Component } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.id !== this.props.id) {
      this.fetchComments();
    }
  };
  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2NDE4MjI0NTcsImV4cCI6MTY0MzAzMjA1N30.lN1RxoQOJ30JKSwPt0p956WSubDVQISDhHcwn_78XXg",
          },
        }
      );
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments });
      }
    } catch (err) {
      alert("Fetch failed");
    }
  };
  /*  componentDidMount = () => {
    this.fetchComments();
  }; */

  render() {
    return (
      <div>
        <AddComment asin={this.props.id} />
        <Comment comments={this.state.comments} />
      </div>
    );
  }
}
export default CommentArea;
