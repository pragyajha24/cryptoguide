import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  //   banner: {
  //     backgroundImage: "url(../banner2.jpg)",
  //   },
  bannerContext: {
    height: 400,
    diplay: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    marginTop:"3rem",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamilt: "Montserrat",
            }}
          >
            Crypto Guide
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamilt: "Montserrat",
            }}
          >
            Get all the Info regarding your favourite Crypto Coin
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
