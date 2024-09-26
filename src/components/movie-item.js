import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import blank from "../1aaafff8-98bd-4756-8dad-85d1e86a3277_qr.jpeg";
import { withRouter } from "react-router";

const MovieItem = (props) => {
  return (
    <>
      <Row>
        <Col item xs={12} md={2}>
          <img
            src={props.data.coverImage || blank}
            style={{ width: 230, height: 230 }}
          />
        </Col>
        <Col item xs={12} md={10}>
          <div>
            <b>{props.data.title}</b>
          </div>
          <div>Actors: {props.data.actors.map((x) => x.name).join(", ")}</div>
          <div>
            Description: Screeching Weasel is an American punk rock band
            consisting of Ben Weasel (vocals), Mike Kennerty (guitar), Mike
            Hunchback (guitar), Zach "Poutine" Brandner (bass) and Pierre Marche
            (drums) founded in 1986 by Ben Weasel and John Jughead. Screeching
            Weasel is originally from the Chicago suburb of Prospect Heights,
            Illinois.[1] Since their formation, Screeching Weasel have reformed
            several times with lineup changes. Ben Weasel has been the only
            constant member, though Jughead was present in every incarnation of
          </div>
          <br />
          <Button
            variant="dark"
            onClick={() => props.history.push("/details/" + props.data.id)}
          >
            See Details
          </Button>
          {"  "}
          <Button
            variant="dark"
            onClick={() => props.history.push("/edit/" + props.data.id)}
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
