import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
        <Route path={"/about"} component={About} exact></Route>
        <Route path={"/contact"} component={Contact} exact></Route>
        <Route path={"/policy"} component={Policy} exact></Route>
        <Route path={"/"} component={HomeScreen} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
