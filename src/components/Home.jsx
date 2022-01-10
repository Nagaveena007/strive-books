import scifi from "../data/scifi.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import horror from "../data/horror.json";

import { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import Books from "./Books";
const Home = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      {/*  <Container>
        <Books books={scifi} />
      </Container> */}
      <Tabs
        style={{ border: "1px solid black" }}
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Sci-Fi">
          <h3 className="mt-4 ">Sci-Fi Books</h3>
          <Container>
            <Books books={scifi} />
          </Container>
        </Tab>
        <Tab eventKey="profile" title="Romance">
          <h3 className="mt-4 ">Romance Books</h3>

          <Container>
            {" "}
            <Books books={romance} />
          </Container>
        </Tab>
        <Tab eventKey="contact" title="History">
          <h3 className="mt-4 ">History Books</h3>

          <Container>
            {" "}
            <Books books={history} />
          </Container>
        </Tab>
        <Tab eventKey="view" title="Horror">
          <h3 className="mt-4 ">Horror Books</h3>

          <Container>
            {" "}
            <Books books={horror} />
          </Container>
        </Tab>
        <Tab eventKey="other" title="Fantasy">
          <h3 className="mt-4 ">Fantasy Books</h3>

          <Container>
            {" "}
            <Books books={fantasy} />
          </Container>
        </Tab>
      </Tabs>
    </>
  );
};
export default Home;
