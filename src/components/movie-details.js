import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import blank from "../1aaafff8-98bd-4756-8dad-85d1e86a3277_qr.jpeg";
import { Link } from "react-router-dom";

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
            <Col item xs={12} md={3}>
              <img
                src={movie.coverImage || blank}
                style={{ width: 300, height: 300 }}
              />
            </Col>
            <Col item xs={12} md={8}>
              <h2>{movie.title}</h2>
              <div>
                <div>
                  <b>Language: </b>
                  {movie.language}
                </div>
                <div>
                  <b>Release Date: </b>
                  {(movie.releaseDate = movie.releaseDate.split("T")[0])}
                </div>
                <div>
                  <b>Cast: </b>
                  {movie.actors.map((x) => x.name).join(", ")}
                </div>
              </div>
              <div>
                <br />
                <h4>History</h4>
                <p>{movie.description || "N/A"}</p>
              </div>
              <div>
                <h4>Track Listing</h4>
              </div>
            </Col>
            <Col item xs={12} md={1}>
              <Link to="/">Home</Link>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default MovieDetails;
