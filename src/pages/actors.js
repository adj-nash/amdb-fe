import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ActorList from "../components/actor-list";

const Actors = (props) => {
  return (
    <>
      <Row>
        <Col xs={12} md={10}>
          <h2>Music on AMDb</h2>
        </Col>
        <Col xs={12} md={2} className="align-self-center">
          <div className="float-right">
            <Button
              variant="dark"
              onClick={() => {
                props.history.push("/Actors/create-edit");
              }}
            >
              Add Band
            </Button>{" "}
            <Button>Hello</Button>
          </div>
        </Col>
      </Row>
      <ActorList />
    </>
  );
};

export default withRouter(Actors);
