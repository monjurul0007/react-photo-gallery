import { Card, Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import PhotoContainer from "./components/PhotoContainer/PhotoContainer";
import { PhotoContextProvider } from "./Context/PhotoContext";
import UploadFile from "./components/UploadFile";

function App() {
  return (
    <PhotoContextProvider>
      <Container className="py-5">
        <Card>
          <Card.Header>
            <Header />
          </Card.Header>
          <Card.Body>
            <PhotoContainer />
          </Card.Body>
        </Card>
        <UploadFile />
      </Container>
    </PhotoContextProvider>
  );
}

export default App;
