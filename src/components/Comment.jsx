import { Component } from "react";
import { ListGroupItem, Modal } from "react-bootstrap";
import { Button, ListGroup, Badge } from "react-bootstrap";
import DeleteComment from "./DeleteComment";

class Comment extends Component {
  state = {};

  render() {
    return (
      <div>
        <ListGroup
          className="mb-3"
          style={{ border: "1px solid black", borderRadius: "0.6rem" }}
        >
          {this.props.comments.map((c, i) => (
            <ListGroup.Item key={i}>
              {c.comment}
              <Badge pill variant="warning" className="ml-2">
                {c.rate}
              </Badge>
              <DeleteComment comment={c} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
export default Comment;
