import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dulce Fonseca Chavez
          </Typography>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>

          <Link to="/resume">
            <Button color="inherit">Resume</Button>
          </Link>

          <Link to="/projects">
            <Button color="inherit">Projects</Button>
          </Link>

          <Link to="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
