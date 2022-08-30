import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path={"/about"} component={About} exact></Route>
        <Route path={"/contact"} component={Contact} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
