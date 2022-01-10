import Books from "./components/Books";
import FooterPart from "./components/FooterPart";
import Search from "./components/Search";
import scifi from "./scifi.json";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
class App extends React.Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Router>
        <MyNav search={scifi} />
        <Route
          path="/"
          exact
          render={() => <Books books={this.state.searchQuery} />}
        />

        <FooterPart />
      </Router>
    );
  }
}

export default App;
