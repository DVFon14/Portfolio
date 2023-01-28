import ButtonAppBar from "../nav";
import memories from "../images/memories.jpeg";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Home() {
  return (
    <>
      <ButtonAppBar />
      <br />
      <Grid>
        <center>
          <Typography gutterBottom variant="subtitle1" component="div">
            <h1>Dulce Fonseca Chavez</h1>
          </Typography>
          <Img alt="memories" src={memories} height="400" width="400" />
          <ButtonBase sx={{ width: 600, height: 100 }}>
            <Typography variant="subtitle1" gutterBottom>
              A mathematics teacher turned software developer. Eager to build
              technology that is intuitive to use for educators and impactful
              for student learning. Passionate about bettering communities
              through technology and equitable education.
            </Typography>
          </ButtonBase>
        </center>
      </Grid>

      <Paper>
        <Grid
          container
          spacing={1}
          sx={{ paddingLeft: 1, paddingRight: 5, paddingTop: 5 }}
          
        >
          {/*spacing betweem column 1 and 2*/}

          <Grid item>
            <ButtonBase sx={{ width: 600, height: 400 }}>
              {" "}
              {/* width from left, height of the total container */}
              <Img alt="memories" src={memories} height="400" width="400" />
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Dulce Fonseca Chavez
                </Typography>
                <Typography variant="body2" gutterBottom>
                  A mathematics teacher turned software developer. Eager to
                  build technology that is intuitive to use for educators and
                  impactful for student learning. Passionate about bettering
                  communities through technology and equitable education.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Home;
