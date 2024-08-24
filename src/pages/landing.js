import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import MovieList from "../components/movie-list";
import CreateMovieModel from "../components/create-movie-model";

const Landing = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={10}>
          <h2>Movies</h2>
        </Col>
        <Col xs={12} md={2} className="align-self-center">
          <Button className="float-right" onClick={() => {}}>
            Add New Movie
          </Button>
        </Col>
      </Row>

      <MovieList />
      <CreateMovieModel />
    </>
  );
};

export default Landing;
