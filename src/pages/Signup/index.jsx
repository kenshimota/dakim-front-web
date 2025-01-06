import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import styled from "@mui/material/styles/styled";
import FormSignup from "./FormSignup";

const GridRoot = styled(Grid)(({ theme }) => ({
  position: "relative",
  height: "100%",
  borderRadius: 10,
  maxWidth: 1000,
  maxHeight: "fit-content",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  [theme.breakpoints.down("sm")]: {
    maxHeight: "auto",
    padding: theme.spacing(1),
  },
}));

const GridImg = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  backgroundImage: "url('/background-signup.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const GridForm = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  maxHeight: "100%",
  overflow: "auto",
}));

const GridContainerForm = styled(Grid)(({ theme }) => ({
  height: "100%",
  position: "100%",
}));

const GridScreen = styled(Grid)(({ theme }) => ({
  height: "100%",
  position: "100%",
  background: theme.palette.primary.main,
}));

const Signup = ({ onSave }) => (
  <GridScreen container justifyContent="center" alignContent="center">
    <GridRoot container>
      <GridImg item xs={12} md={6} />
      <GridForm item xs={12} md={6}>
        <GridContainerForm
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid container>
            <Grid item xs={12}>
              <Grid container justifyContent="center">
                <Avatar
                  alt="Coffee Login"
                  src="vite.svg"
                  style={{ height: 100, width: 100 }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="h3">
                Dakim C.A
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container justifyContent="center">
                <FormSignup onSave={onSave} />
              </Grid>
            </Grid>
          </Grid>
        </GridContainerForm>
      </GridForm>
    </GridRoot>
  </GridScreen>
);

Signup.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default Signup;
