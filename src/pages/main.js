import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  }
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid container direction="column" style={{ width: "100%" }}>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "4em" }}
      >
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h2"
          style={{ fontFamily: "Roboto" }}
        >
          We create the Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "1em" }}
      >
        <Grid item lg>
          <img
            alt="mountain through binoculars"
            style={{
              maxWidth: matchesSM ? 300 : "20em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Lorem Ipsum
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
             including versions of Lorem Ipsum.
            
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              We want to help businesses capitalize on the latest and greatest
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "8em", marginBottom: "8em" }}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "50em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Lorem Ipsum
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
           
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
      >
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#6b778d", height: "60em" }}
      >
        <Grid item lg style={{ alignSelf: "center" }}>
          <img alt="handshake" width="100%" style={{ maxWidth: 700 }} />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : "right"}
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Lorem Ipsum
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              style={{ color: "#fff", maxWidth: "40em" }}
              paragraph
              justify ="right"
            >
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
           
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              style={{ color: "#fff", maxWidth: "40em" }}
              paragraph
              justify ="right"

            >
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              style={{ color: "#fff", maxWidth: "40em" }}
              paragraph
              justify ="right"

            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#ff6768", height: "60em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#4f3b78", marginTop: matchesMD ? 0 : "5em" }}
            >
              Lorem Ipsum
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#263859", maxWidth: "40em", fontWeight: '400' }}
              paragraph
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#263859", maxWidth: "40em", fontWeight: '400' }}
              paragraph
            >
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
           
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#263859", maxWidth: "40em", fontWeight: '400',}}
              paragraph
            >
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            alt="basic website design outline"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
