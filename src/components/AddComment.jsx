import { Component } from "react";
import { Form, Button } from "react-bootstrap";
class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.id,
    },
  };

  addComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2Mzk2NTY2MjYsImV4cCI6MTY0MDg2NjIyNn0.VuWkl8UfKBY7_7rPkDzvgeCqdVYWDfCZJu7KgRKboZE",
          },
        }
      );
      if (response.ok) {
        alert("comment successfully Added");
      } else {
        alert("comment NOT Added");
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <Form
        onSubmit={this.addComment}
        style={{ border: "1px solid black", borderRadius: "0.6rem" }}
      >
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <h4>Comment Here</h4>
          </Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            value={this.state.comment.comment}
            rows={3}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              })
            }
          />
        </Form.Group>
        <Form.Group variant="warning" controlId="exampleForm.ControlSelect1">
          <Form.Label>
            <h4>Ratings</h4>
          </Form.Label>
          <Form.Control
            as="select"
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" className="mb-2" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default AddComment;
