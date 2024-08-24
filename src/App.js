import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Actors from "./pages/actors";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            &nbsp;&nbsp;Movie Database
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/Actors">
              Actors
            </Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Actors" element={<Actors />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
