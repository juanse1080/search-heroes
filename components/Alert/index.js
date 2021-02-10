import PropTypes from "prop-types";

import { memo } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";

const Alert = memo(({ message, severity }) => {
  return (
    <Grid item lg={6} md={4} sm={6} xs={12}>
      <MuiAlert severity={severity}>{message}</MuiAlert>
    </Grid>
  );
});

export default Alert;

PropTypes.Alert = {
  title: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
};
