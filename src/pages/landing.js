import React, { useState } from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import MovieList from "../components/movie-list";
import CreateMovieModel from "../components/create-movie-model";
import "../styles.css";

const Landing = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row>
        <Col xs={12} md={10}>
          <h2>Movies</h2>
        </Col>
        <Col xs={12} md={2} className="align-self-center">
          <div className="float-right">
            <Button
              variant="dark"
              onClick={() => {
                setShow(true);
              }}
            >
              Add Movie
            </Button>{" "}
            <Button>Hello</Button>
          </div>
        </Col>
      </Row>

      <MovieList />
      <CreateMovieModel show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default Landing;
