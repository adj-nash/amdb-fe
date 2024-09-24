import React, { useState } from "react";
import blank from "../1aaafff8-98bd-4756-8dad-85d1e86a3277_qr.jpeg";
import { Form, Image, Button } from "react-bootstrap";
import AsyncSelect from "react-select/async";

const EditMovie = () => {
  const [movie, setMovie] = useState({});
  const [actors, setActors] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleFileUpload = (event) => {
    event.preventDefault();
    var file = event.target.files[0];
    const form = new FormData();
    form.append("imageFile", file);

    fetch(process.env.REACT_APP_API_URL + "/Movie/upload-movie-poster", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((res) => {
        var newData = movie;
        newData.coverImage = res.profileImage;

        setMovie((oldData) => {
          return {
            ...oldData,
            ...newData,
          };
        });
      })
      .catch((err) => alert("Error in file upload."));
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    const newData = movie;
    newData[event.target.name] = event.target.value;

    setMovie((oldData) => {
      return {
        ...oldData,
        ...newData,
      };
    });
  };

  const actorData = (inputValue) => {
    return fetch(process.env.REACT_APP_API_URL + "/Person/Search/" + inputValue)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === true && res.data.length > 0) {
          return res.data.map((x) => {
            return { value: x.id, label: x.name };
          });
        }
        if (res.data.count === 0) {
          alert("There is no actor with that name.");
        }
      })
      .catch((err) => alert("An error occured while trying to fetch actors."));
  };

  const multiSelectChange = (data) => {
    setActors(data);
    var people = data.map((x) => {
      return { id: x.value, name: x.label };
    });

    var newData = movie;
    newData.actors = people;
    setMovie((oldData) => {
      return {
        ...oldData,
        ...newData,
      };
    });
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    let movieToPost = movie;
    movieToPost.actors = movieToPost.actors.map((x) => x.id);

    if (movie && movie.id > 0) {
      //Update
      fetch(process.env.REACT_APP_API_URL + "/Movie", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieToPost),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === true && res.data) {
            setMovie(res.data);
            alert("Record updated successfully!");
          }
        })
        .catch((err) => alert("Error in updating data"));
    } else {
      //Create
      fetch(process.env.REACT_APP_API_URL + "/Movie", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieToPost),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === true && res.data) {
            setMovie(res.data);
            alert("Created successfully!");
          }
        })
        .catch((err) => alert("Error in creating new record"));
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmission}>
        <Form.Group className="d-flex justify-content-center">
          <Image
            width="200"
            height="200"
            src={(movie && movie.coverImage) || blank}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <div>
            <input type="file" required onChange={handleFileUpload}></input>
          </div>
        </Form.Group>
        <Form.Group controlId="formMovieTitle">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control
            name="title"
            value={(movie && movie.title) || ""}
            type="text"
            autoComplete="off"
            placeholder="Enter Movie Name"
            onChange={handleFieldChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter movie name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formMovieDescription">
          <Form.Label>Movie Description</Form.Label>
          <Form.Control
            name="description"
            value={(movie && movie.description) || ""}
            type="text-area"
            rows={3}
            placeholder="Enter Movie Description"
            onChange={handleFieldChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMovieReleaseDate">
          <Form.Label>Movie Release Date</Form.Label>
          <Form.Control
            name="releaseDate"
            value={(movie && movie.releaseDate) || ""}
            type="date"
            onChange={handleFieldChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter movie release date.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formMovieReleaseDate">
          <Form.Label>Movie Actors</Form.Label>
          <AsyncSelect
            cacheOptions
            isMulti
            value={actors}
            loadOptions={actorData}
            onChange={multiSelectChange}
          />
        </Form.Group>
        <Form.Group controlId="formMovieLanguage">
          <Form.Label>Movie Language</Form.Label>
          <Form.Control
            name="language"
            value={(movie && movie.language) || ""}
            type="text"
            placeholder="Enter Movie Language"
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Button type="submit">
          {movie && movie.id > 0 ? "Update" : "Create"}
        </Button>
      </Form>
    </>
  );
};

export default EditMovie;
