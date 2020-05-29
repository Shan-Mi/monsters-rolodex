import React from "react";

import "./search-box.styles.css";

/* functional components */
/* there are no state or constructor inside of it, it is easy to read and easy to test */
/* get some props, and return some html */
/* the others are class components */
/* search context to be a prop that passed in, use distructor here */
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
