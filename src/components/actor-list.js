import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import ReactPaginate from "react-paginate";

const ActorList = (props) => {
  const [actors, setActors] = useState(null);
  const [actorCount, setActorCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    //Get all movies
    getPerson();
  }, [page]);

  const getPerson = () => {
    fetch(
      process.env.REACT_APP_API_URL +
        "/person?pageSize=" +
        process.env.REACT_APP_PAGING_SIZE +
        "&pageIndex=" +
        page
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === true && res.data.count > 0) {
          setActors(res.data.person);
          setActorCount(
            Math.ceil(res.data.count / process.env.REACT_APP_PAGING_SIZE)
          );
        }

        if (res.data.count === 0) {
          alert("There is no actor data in the system!");
        }
      })
      .catch((err) => alert("Error getting data."));
  };

  const handlePageClick = (pageIndex) => {
    setPage(pageIndex.selected);
  };

  const deletePerson = (id) => {
    fetch(process.env.REACT_APP_API_URL + "/Person?id=" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === true) {
          alert(res.message);
          getPerson();
        }
      })
      .catch((err) => alert("Error in deleting data"));
  };

  return (
    <>
      {actors ? (
        <div>
          {" "}
          {actors.map((m, i) => (
            <Row key={i}>
              <Col>
                <div
                  onClick={() => props.history.push("Actors/details/" + m.id)}
                >
                  <b>
                    <u>{m.name}</u>
                  </b>
                </div>
                <Button
                  onClick={() =>
                    props.history.push("/Actors/create-edit", { data: m })
                  }
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => deletePerson(m.id)}
                  danger
                >
                  Delete
                </Button>
                <hr />
              </Col>
            </Row>
          ))}{" "}
        </div>
      ) : (
        ""
      )}
      <div className="d-flex justify-content-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"page-link"}
          pageCount={actorCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-link"}
          nextClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
      ;
    </>
  );
};

export default withRouter(ActorList);
