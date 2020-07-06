import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => {
  return (
    <p>
      Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      {", "}
      Show:{" "}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      {", "}
      Show:{" "}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Complated
      </FilterLink>
    </p>
  );
};

export default Footer;
