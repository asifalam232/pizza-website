import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
    </BrowserRouter>
  );
}

export default App;
