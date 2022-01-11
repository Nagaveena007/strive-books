import { Component } from "react";
import { Row, Form, Button, Container, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";
class Books extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={10}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  style={{ border: "2px solid #343a40" }}
                  type="text"
                  placeholder="Search for Books"
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                ></Form.Control>
              </Form.Group>
            </Form>

            <Row>
              {this.props.books
                .filter((book) =>
                  book.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((book, i) => (
                  <SingleBook
                    book={book}
                    key={i}
                    selectedBook={this.state.selectedBook}
                    changeSelecteBook={(asin) =>
                      this.setState({
                        selectedBook: asin,
                      })
                    }
                  />
                ))}
            </Row>
          </Col>
          <Col md={2} className="d-flex justify-content-center">
            <h3></h3>
            <CommentArea id={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
