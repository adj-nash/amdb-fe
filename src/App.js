import "./App.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Actors from "./pages/actors";

function App() {
  const button = {
    backgroundColor: "#E4D00A",
    fontSize: "15px",
    marginBottom: "20px",
    margin: "20px",
    color: "black",
    padding: "0, 30px",
  };

  return (
    <Container>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <Button style={button}>AMDb</Button>
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
        <Switch>
          <Route exact path="/" component={() => <Landing />} />
          <Route exact path="/Actors" component={Actors} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
