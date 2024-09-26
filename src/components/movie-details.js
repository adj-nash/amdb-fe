import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import blank from "../1aaafff8-98bd-4756-8dad-85d1e86a3277_qr.jpeg";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState(null);

  const { movieid } = props.match.params;

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/Movie/" + movieid)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === true) {
          setMovie(res.data);
        }
      })
      .catch((err) => alert("Error in getting data"));
  }, []);

  return (
    <>
      <Row>
        {movie && (
          <>
            <Col item xs={12} md={4}>
              <img
                src={movie.coverImage || blank}
                style={{ width: 300, height: 300 }}
              />
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default MovieDetails;
