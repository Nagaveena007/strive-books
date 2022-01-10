import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNav from "./components/MyNav";
import Home from "./components/Home";
import FooterPart from "./components/FooterPart";
import JumbotronPart from "./components/JumbotronPart";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";
import scifi from "./data/scifi.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <JumbotronPart />
      <WarningSign text="Welcome to " />
      {/*  <MyBadge text="Strive Books" color="warning" /> */}
      {/*  <SingleBook singlebook={scifi[0]} /> */}
      <Home />

      <FooterPart />
    </div>
  );
}

export default App;
