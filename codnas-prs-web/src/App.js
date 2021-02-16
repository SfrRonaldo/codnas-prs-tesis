import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Tutorial from "./pages/tutorial";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tutorial" component={Tutorial} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
