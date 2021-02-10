import { useEffect, useState } from "react";

import axios from "axios";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Hero, { LoadingHero } from "@/components/Hero";
import Search from "@/components/Search";
import AppBar from "@/components/AppBar";
import Alert from "@/components/Alert";

import useBoolean from "@/hooks/useBoolean";
import useQuery from "@/hooks/useQuery";

import useStyles from "@/styles/pages";

const domain = "http://gateway.marvel.com/v1/public/characters";
const publicKey = "641f83bb2b765099718a0c6f6281a4fb";
const hash = "cd89af012b96a80c91ae2d7293f36f1c";

const heroes = () => {
  const classes = useStyles();
  const {
    boolean: loading,
    setToFalse: setLoadingFalse,
    setToTrue: setLoadingTrue,
  } = useBoolean(true);

  const [heroes, setHeroes] = useState([]);
  const { query, handleQuery } = useQuery("");

  useEffect(() => {
    const url =
      query.length > 0
        ? `${domain}?nameStartsWith=${query}&ts=1&limit=12&apikey=${publicKey}&hash=${hash}`
        : `${domain}?ts=1&limit=12&apikey=${publicKey}&hash=${hash}`;
    setLoadingTrue();
    axios
      .get(url, {})
      .then(({ data }) => {
        const { results } = data.data;
        setHeroes(results);
      })
      .catch((error) => {
        console.error(error);
      })
      .then(() => {
        console.log("entro");
        setLoadingFalse();
      });
  }, [query]);

  const showAlert = heroes.length === 0 && !loading;

  return (
    <>
      <Box className={classes.content}>
        <AppBar />
        <Search value={query} onChange={handleQuery} />
        <Container maxWidth="lg">
          {showAlert && (
            <Box display="flex" justifyContent="center">
              <Alert severity="info" message="no heroes found" />
            </Box>
          )}
          <Grid container spacing={3}>
            {!loading
              ? heroes.map((hero) => (
                  <Grid key={hero.id} item lg={3} md={4} sm={6} xs={12}>
                    <Hero hero={hero} />
                  </Grid>
                ))
              : new Array(12).fill(0).map((item, idx) => (
                  <Grid
                    key={`${item}.${idx}`}
                    item
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                  >
                    <LoadingHero />
                  </Grid>
                ))}
          </Grid>
        </Container>
        <Box pt={5} />
      </Box>
    </>
  );
};

heroes.propTypes = {};

export default heroes;
