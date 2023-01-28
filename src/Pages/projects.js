import ButtonAppBar from "../nav";
import game2 from "../images/game2.png";

import { Router, Route, Link, Routes } from "react-router-dom";

import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import GitHubIcon from "@mui/icons-material/GitHub";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Projects() {
  return (
    <>
      <ButtonAppBar />
      <br />

      <center>
        <h3>
          The following are a set of projects I developed during my time at the
          PerScholas bootcamp. <br /> To see all my projects, check out my
          gitHub repositories.
          <br />
          <br />
          <GitHubIcon
            onClick={(event) =>
              (window.location.href =
                "https://www.linkedin.com/in/dulce-fonseca-chavez-280146251/")
            }
          />
        </h3>
      </center>
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
        <Grid
          container
          spacing={1}
          sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5 }}
        >
          {/*spacing betweem column 1 and 2*/}

          <Grid item>
            <ButtonBase
              sx={{ width: 600, height: 400 }}
              href="https://dvfon14.github.io/TwoTruthsAndALie/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {/* width from left, height of the total container */}
              <Img alt="game2" src={game2} height="400" width="400" />
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Typography gutterBottom variant="subtitle1" component="div">
                Summary: <br />
                In this game, the user is given three statements and must pick
                the incorrect assertion. Each round is made up of three
                questions, for a total of three rounds. <br />
                <br />
                Technology: <br />
                This game uses React and the Material UI framework. <br />
                <br />
                Website: <br />
                <a
                  href="https://dvfon14.github.io/TwoTruthsAndALie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TwoTruthsAndALie <br />
                </a>
                <br />
                Repository: <br />
                <a
                  href="https://github.com/DVFon14/TwoTruthsAndALie
                  "
                  target="_blank"
                  rel="noreferrer"
                >
                  TwoTruthsAndALie GitHub Repo
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <br />
      <br />
      
    </>
  );
}

export default Projects;

// import ButtonAppBar from "../nav";
// import game2 from "../images/game2.png";

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';

// function Projects() {
//   return (
//     <>
//     <ButtonAppBar />
//     <br/>
//     here is where i will write an introduction to the page
//     <br/>
//     <center>
//  <Card sx={{ maxWidth: 400 }}>

//       <center>
//         <CardHeader
//         // avatar={
//         //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//         //     R
//         //   </Avatar>
//         // }

//         title="Two Truths and a Lie"
//         // subheader="September 14, 2016"
//       />
//       </center>

//       <CardMedia
//         component="img"
//         height=""
//         src={game2}
//         alt="game2 image"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>

//     </Card>
//     </center>
//     </>
//   );
// }

// export default Projects;

// <Grid container spacing={1} sx = {{paddingLeft: 10, paddingRight: 10, paddingTop:10, paddingBottom:10}}>
// {/*spacing betweem column 1 and 2*/}

// <Grid item>
//   <ButtonBase sx={{ width: 600, height: 400 }}>
//     {" "}
//     {/* width from left, height of the total container */}
//     <Img alt="SpaceBattleProject"  height="400" width="400"/>
//   </ButtonBase>
// </Grid>

// <Grid item xs={12} sm container>
//   <Grid item xs container direction="column" spacing={2}>
//       <Typography gutterBottom variant="subtitle1" component="div">
//         Summary: <br/>
//         Aliens are attacking Earth, and it is up to the user to save the world.<br/>

//         <br/>
//         Technology: <br/>
//         This game is entirely played on the console and was written using strictly Javascript <br/>
//         <br/>
//         Website: <br />
//         <a href="https://dvfon14.github.io/TwoTruthsAndALie/">TwoTruthsAndALie</a>
//       </Typography>

//   </Grid>
// </Grid>
// </Grid>


//============ If I want to add other projects =============//
//==========================================================//
//==========================================================//
//==========================================================//

{/* <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1300,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}
        >
          {/*spacing betweem column 1 and 2*/}

      //     <Grid item>
      //       <ButtonBase sx={{ width: 600, height: 400 }}>
      //         {" "}
      //         {/* width from left, height of the total container */}
      //         <Img alt="SpaceBattleProject" height="400" width="400" />
      //       </ButtonBase>
      //     </Grid>

      //     <Grid item xs={12} sm container>
      //       <Grid item xs container direction="column" spacing={2}>
      //         <Typography gutterBottom variant="subtitle1" component="div">
      //           Summary: <br />
      //           Aliens are attacking Earth, and it is up to the user to save the
      //           world.
      //           <br />
      //           The user has a fixed hull power of 20 and a fixed firepower of
      //           6, but the user's accuracy is randomized from between x and y.{" "}
      //           <br />
      //           There are 6 ships that must be defeated, one at a time. Their
      //           hull, firepower, and accuracy are each randomized. <br />
      //           <br />
      //           Technology: <br />
      //           This game is entirely played on the console and was written
      //           using strictly Javascript. <br />
      //           <br />
      //           Website: <br />
      //           <a></a>
      //         </Typography>
      //       </Grid>
      //     </Grid>
      //   </Grid>
      // </Paper>
      // <br />
      // <br />
      // <Paper
      //   sx={{
      //     p: 2,
      //     margin: "auto",
      //     maxWidth: 1300,
      //     flexGrow: 1,
      //     backgroundColor: (theme) =>
      //       theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      //   }}
      // >
      //   <Grid
      //     container
      //     spacing={1}
      //     sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}
      //   >
      //     {/*spacing betweem column 1 and 2*/}

      //     <Grid item>
      //       <ButtonBase sx={{ width: 600, height: 400 }}>
      //         {" "}
      //         {/* width from left, height of the total container */}
      //         <Img alt="TBD" height="400" width="400" />
      //       </ButtonBase>
      //     </Grid>

      //     <Grid item xs={12} sm container>
      //       <Grid item xs container direction="column" spacing={2}>
      //         <Typography gutterBottom variant="subtitle1" component="div">
      //           Summary: <br />
      //           <br />
      //           Technology: <br />
      //           This is a full stack application that makes use of the entire
      //           MERN stack, MongoDB, Express, React, and Node. Within React, I
      //           make use of Javascript and HTML.
      //           <br />
      //           <br />
      //           Website: <br />
      //           <a></a>
      //         </Typography>
      //       </Grid>
      //     </Grid>
      //   </Grid>
      // </Paper> */}



