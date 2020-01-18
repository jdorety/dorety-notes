import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getList } from "../../../actions";
import { ReactComponent as Home } from "../../../icons/home.svg";

const HomeButton = props => {
  function clickHandler() {
    props.history.push("/");
  }

  return (
    <button className="tool" onClick={clickHandler}>
      <span className="desk-tool"> View Your Notes</span>
      <Home className="mobile-tool" />
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
