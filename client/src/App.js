import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
        <Route path={"/register"} component={Register} exact></Route>
        <Route path={"/login"} component={Login} exact></Route>
        <Route path={"/orders"} component={OrderScreen} exact></Route>
        <Route path={"/cart"} component={CartScreen} exact></Route>
        <Route path={"/about"} component={About} exact></Route>
        <Route path={"/contact"} component={Contact} exact></Route>
        <Route path={"/policy"} component={Policy} exact></Route>
        <Route path={"/"} component={HomeScreen} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
