import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
          <Route path={"/cart"} component={CartScreen} exact />
          <Route path={"/about"} component={About} exact />
          <Route path={"/contact"} component={Contact} exact />
          <Route path={"/policy"} component={Policy} exact />
          <Route path={"/"} component={HomeScreen} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
