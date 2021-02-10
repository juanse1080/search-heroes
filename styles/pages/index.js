import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    height: "100vh",
    overflowY: "scroll",
  },
}));

export default useStyles;
