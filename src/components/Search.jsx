import "../components/Search.css";
import { Component } from "react";
import { Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Books from "./Books";
import SingleBook from "./SingleBook";
import scifi from "../data/scifi.json";

class Search extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <div className="search__box">
        <input
          className="search__txt"
          type="text"
          name=""
          placeholder="Type to search"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
        <BsSearch className="search__btn" />
        <Row>
          {this.props.searchBook
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book, i) => (
              <SingleBook singlebook={book} key={i} />
            ))}
        </Row>
      </div>
    );
  }
}

export default Search;
