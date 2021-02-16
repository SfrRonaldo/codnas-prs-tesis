import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Tutorial from "./pages/tutorial";
import Detail from "./pages/detail";
import Estimate from "./pages/estimate";
import NotFound from "./pages/not-found";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/estimate" component={Estimate} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
