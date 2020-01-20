import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getList } from "../../../actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const HomeButton = props => {
  const classes = useStyles();
  function clickHandler() {
    props.history.push("/");
  }

  return (
    <div className={classes.root}>
      <Button className="tool" startIcon={<Icon>home</Icon>}  variant="contained" onClick={clickHandler}>
        View Notes
      </Button>
    </div>
  );
};

HomeButton.propTypes = {
  getList: PropTypes.func,
  history: PropTypes.object
};

export default connect(null, { getList })(HomeButton);
