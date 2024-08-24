import React from "react";
import { Row, Col } from "react-bootstrap";
import blank from "../1aaafff8-98bd-4756-8dad-85d1e86a3277_qr.jpeg";

const MovieItem = (props) => {
  return (
    <>
      <Row>
        <Col item xs={12} md={2}>
          <img
            src={props.data.coverImage || blank}
            style={{ width: 150, height: 150 }}
          />
        </Col>
        <Col item xs={12} md={10}>
          <div>
            <b>{props.data.title}</b>
          </div>
          <div>Actors: {props.data.actors.map((x) => x.name).join(", ")}</div>
        </Col>
        <Col>
          <hr />
        </Col>
      </Row>
    </>
  );
};

export default MovieItem;
