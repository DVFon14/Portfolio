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
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dulce Fonseca Chavez
          </Typography> */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <Button style={{ color: "#ffffff" }}>Dulce Fonseca</Button>
            </Link>
          </Typography>

          <Link to="/">
            <Button style={{ color: "#ffffff" }}>Home</Button>
          </Link>

          <Link to="/resume">
            <Button style={{ color: "#ffffff" }}>Resume</Button>
          </Link>

          <Link to="/projects">
            <Button style={{ color: "#ffffff" }}>Projects</Button>
          </Link>

          {/* <Link to="/contact">
            <Button style={{ color: "#ffffff" }}>Contact</Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
