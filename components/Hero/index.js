import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import LoadingHero from "./LoadingHero";

import useStyles from "./styles";

const Hero = ({ hero }) => {
  const {
    name,
    thumbnail,
    description,
    comics,
    series,
    urls,
  } = hero;

  const img = thumbnail.path + "." + thumbnail.extension;

  const classes = useStyles({ img });

  const redirect = () => {
    const [{ url }] = urls;
    window.open(url, "_blank");
  };

  return (
    <Card onClick={redirect}>
      <div className={classes.media}>
        <div className={classes.info}>
          <Grid container spacing={1}>
            <Grid item>
              <Tooltip title="Comics">
                <Chip
                  size="small"
                  avatar={<Avatar>{comics.available}</Avatar>}
                  label="Comics"
                />
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Series">
                <Chip
                  size="small"
                  avatar={<Avatar>{series.available}</Avatar>}
                  label="Series"
                />
              </Tooltip>
            </Grid>
          </Grid>
        </div>
        <div className={classes.header}>
          <Typography variant="inherit" color="inherit">
            {name}
          </Typography>
          <span className={classes.span}>{description}</span>
        </div>
      </div>
    </Card>
  );
};

PropTypes.Hero = {
  hero: PropTypes.object.isRequired,
};

export default Hero;
export { LoadingHero };
