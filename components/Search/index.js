import PropTypes from "prop-types";

import InputBase from "@material-ui/core/InputBase";
import Container from "@material-ui/core/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import useStyles from "./styles";
import { Paper } from "@material-ui/core";

const SearchBar = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={0}>
          <FontAwesomeIcon
            icon={faSearch}
            fixedWidth
            className={classes.icon}
          />
          <InputBase {...props} className={classes.input} fullWidth autoFocus />
        </Paper>
      </div>
    </Container>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
