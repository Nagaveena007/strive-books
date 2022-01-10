import { Component } from "react";
import { Card, Row, Col, Badge, Button, Modal } from "react-bootstrap";
import CommentArea from "./CommentArea";
class SingleBook extends Component {
  state = {
    selectedBook: false,
  };
  render() {
    return (
      <>
        <Col md={3} className="mb-2">
          <Card
            onClick={() =>
              this.setState({
                
                selectedBook: !this.state.selectedBook,
              })
            }
            style={{
              height: "68vh",
              border: `3px solid ${this.state.selectedBook ? "red" : "black"}`,
            }}
          >
            <Card.Img
              variant="top"
              style={{ height: "40vh", objectFit: "cover" }}
              src={this.props.singlebook.img}
            />
            <Card.Body>
              <Card.Title>{this.props.singlebook.title}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="warning">$ {this.props.singlebook.price}</Button>
              <Badge pill variant="info" className="ml-5">
                {this.props.singlebook.category}
              </Badge>
            </Card.Footer>
          </Card>
        </Col>
        {this.state.selectedBook && (
          <CommentArea asin={this.props.singlebook.asin} />
        )}
      </>
    );
  }
}
export default SingleBook;
