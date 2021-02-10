import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: ({ img }) => ({
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    paddingTop: "100%",
    height: 0,
    position: "relative",
    minHeight: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${img})`,
    cursor: "pointer",
  }),
  header: {
    position: "absolute",
    padding: theme.spacing(2),
    bottom: 0,
    left: 0,
    color: fade(theme.palette.common.white, 0.8),
    fontSize: "1.5rem",
    fontWeight: 600,
    overflow: "hidden",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
  },
  skeleton: {
    transform: "none",
    paddingTop: "100%",
  },
  span: {
    fontSize: "1rem",
    fontWeight: 400,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  info: {
    position: "absolute",
    padding: theme.spacing(2),
    top: 0,
    left: 0,
  },  
}));

export default useStyles;
