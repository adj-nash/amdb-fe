import "./App.css";
import { Container, Nav, Navbar, Button, Row } from "react-bootstrap";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Actors from "./pages/actors";
import EditMovie from "./components/edit-movie";
import MovieDetails from "./components/movie-details";
import CreateEditActor from "./components/create-edit-actor";
import ActorDetails from "./components/actor-details";
import "./styles.css";

function App() {
  const button = {
    backgroundColor: "#E4D00A",
    fontSize: "37px",
    marginBottom: "20px",
    margin: "20px",
    color: "black",
    padding: "0, 30px",
  };

  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" className="d-flex">
          <Navbar.Brand as={Link} to="/">
            <Button style={button} size="lg">
              &nbsp;&nbsp;&nbsp;&nbsp;AMDb&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
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

        <Container>
          <Switch>
            <Route exact path="/" component={() => <Landing />} />
            <Route exact path="/details/:movieid" component={MovieDetails} />
            <Route exact path="/edit/:movieid" component={EditMovie} />
            <Route exact path="/Actors" component={Actors} />
            <Route
              exact
              path="/Actors/create-edit"
              component={CreateEditActor}
            />
            <Route
              exact
              path="/Actors/details/:actorid"
              component={ActorDetails}
            />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
