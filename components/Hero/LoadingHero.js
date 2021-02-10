import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "./styles";

const LoadingHero = () => {
  const classes = useStyles();
  return <Skeleton classes={{ root: classes.skeleton }} />;
};
export default LoadingHero;
