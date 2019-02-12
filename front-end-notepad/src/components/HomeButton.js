import React from "react";

const HomeButton = props => {
  function clickHandler() {
    props.history.push("/");
  }

  return <button onClick={clickHandler}>View Your Notes</button>;
};

export default HomeButton;
