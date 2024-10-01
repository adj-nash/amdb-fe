import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import blank from "../1aaafff8-98bd-4756-8dad-85d1e86a3277_qr.jpeg";
import { Link } from "react-router-dom";

const ActorDetails = (props) => {
  const [actor, setActor] = useState(null);

  const { actorid } = props.match.params;

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/Person/" + actorid)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === true) {
          setActor(res.data);
        }
      })
      .catch((err) => alert("Error in getting data"));
  }, []);

  return (
    <>
      <Row>
        {actor && (
          <>
            <Col item xs={12} md={4}>
              <h2>{actor.name}</h2>
              <div>
                <div>
                  <b>Date of Birth </b>
                  {actor.dateOfBirth}
                </div>
                <div>
                  <b>Movies:</b>
                </div>

                {actor.coverImage.map((x) => (
                  <>
                    {" "}
                    <img
                      src={x.coverImage || blank}
                      style={{ width: 230, height: 230 }}
                    />
                    <hr />
                  </>
                ))}
              </div>
              <div>
                <br />
                <h4>History</h4>
              </div>
              <div>
                <h4>Track Listing</h4>
              </div>
            </Col>
            <Col></Col>
          </>
        )}
      </Row>
    </>
  );
};

export default ActorDetails;
