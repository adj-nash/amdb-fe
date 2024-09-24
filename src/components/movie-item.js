import React from "react";
import { Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import blank from "../1aaafff8-98bd-4756-8dad-85d1e86a3277_qr.jpeg";
import { withRouter } from "react-router";

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

          <Button
            variant="dark"
            onClick={() => props.history.push("/details" + props.data.id)}
          >
            See Details
          </Button>
          {"  "}
          <Button
            variant="dark"
            onClick={() => props.history.push("/edit" + props.data.id)}
          >
            Edit
          </Button>
          {"  "}
          <Button
            variant="danger"
            onClick={() => props.deleteMovie(props.data.id)}
          >
            Delete
          </Button>
        </Col>
        <Col>
          <hr />
        </Col>
      </Row>
    </>
  );
};

export default withRouter(MovieItem);
