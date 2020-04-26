import React from "react";
import PropTypes from "prop-types";

const ListItemsCount = props => {
  const { list } = props;
  const displayText = `item${list.length > 1 ? "s" : ""} left`;

  if (list.length === 0) return null;

  return <div>{`${list.length} ${displayText}`}</div>;
};

ListItemsCount.defaultProps = {
  list: []
};

ListItemsCount.propTypes = {
  list: PropTypes.array
};

export default ListItemsCount;
