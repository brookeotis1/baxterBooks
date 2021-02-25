import React from "react";
import BookContext from "../utils/bookContext";

function BookDetail() {
  return (
    // Use consumer to capture and destucture the state values
    <BookContext.Consumer>
      {({result: {Title, Poster, Director, Genre, Released}}) => (
        <div className="text-center">
          <img alt={Title} className="img-fluid" src={Poster} style={{ margin: "0 auto" }} />
          <h3>Director(s): {Director}</h3>
          <h3>Genre: {Genre}</h3>
          <h3>Released: {Released}</h3>
        </div>
      )}
    </BookContext.Consumer>
  );
}

export default BookDetail;
