import React from "react";

const ViewNote = props => {
  return (
    <div className="main-view">
      <div className="modify">
        <a href="#">edit</a>
        <a href="#">delete</a>
      </div>
      <h2 className="section-header">{props.title}</h2>
      <p>{props.textContent}</p>
    </div>
  );
};

export default ViewNote;
