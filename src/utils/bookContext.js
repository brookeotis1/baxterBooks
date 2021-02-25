import React from "react";

const BookContext = React.createContext({
  result: {},
  search: "",
  handleInputChange: () => {},
  handleFormSubmit: () => {}
});

export default BookContext;
