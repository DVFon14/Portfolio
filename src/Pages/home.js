import ButtonAppBar from "../nav";
import memories from "../images/memories.jpeg";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

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

      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1300,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={10}>
          {/*spacing betweem column 1 and 2*/}

          <Grid item>
            <ButtonBase sx={{ width: 600, height: 400 }}>
              {" "}
              {/* width from left, height of the total container */}
              <Img alt="memories" src={memories} height="400" width="400"/>
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  rewtrwetretwertwertrewtrweterwtrew4534534535rtwertretreertrwetretretwertwert
                </Typography>
                <Typography variant="body2" gutterBottom>
                  retwertwretwretwreterwtwert
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