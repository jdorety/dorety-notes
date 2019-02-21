import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getList } from "../actions";

const HomeButton = props => {
  function clickHandler() {
    props.history.push("/");
  }

  return (
    <button className="tool" onClick={clickHandler}>
      View Your Notes
    </button>
  );
};

HomeButton.propTypes = {
  getList: PropTypes.func,
  history: PropTypes.object
};

export default connect(
  null,
  { getList }
)(HomeButton);
