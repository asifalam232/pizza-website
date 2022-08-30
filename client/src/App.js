import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path={"/about"} component={About} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
