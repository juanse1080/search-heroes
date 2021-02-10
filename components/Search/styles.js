import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
    padding: theme.spacing(0, 0, 5, 0),
  },
  paper: {
    padding: theme.spacing(1),
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.palette.divider,
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  input: {
    paddingLeft: theme.spacing(1.5),
  },
}));

export default useStyles;
