import React from "react";
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

export default connect(
  null,
  { getList }
)(HomeButton);
