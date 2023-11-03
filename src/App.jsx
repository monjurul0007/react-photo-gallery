import { Card, Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Container className="pt-5">
      <Card>
        <Card.Header>
          <Header />
        </Card.Header>
        <Card.Body>this is body</Card.Body>
      </Card>
    </Container>
  );
}

export default App;
