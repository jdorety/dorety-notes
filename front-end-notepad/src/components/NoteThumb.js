import React from "react";
import PropTypes from "prop-types";
import "../styles/NoteThumb.css";

const NoteThumb = props => {
  const dispStr =
    props.textBody.length > 55
      ? props.textBody.slice(0, 54) + "..."
      : props.textBody;

  const dispTitle =
    props.title.length > 35 ? props.title.slice(0, 34) + "..." : props.title;

  function clickHandler(e) {
    props.history.push(`/notes/${props._id}`);
  }
  return (
    <div className="note-thumb" onClick={clickHandler}>
      <div className="note-header-wrapper">
        <h3 className="note-header">{dispTitle}</h3>
      </div>
      <div className="thumb-contents">
        <p>{dispStr}</p>
      </div>
    </div>
  );
};

NoteThumb.propTypes = {
  getList: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  notes: PropTypes.array,
  tags: PropTypes.array,
  textBody: PropTypes.string,
  title: PropTypes.string,
  __v: PropTypes.number,
  _id: PropTypes.string
};

export default NoteThumb;
