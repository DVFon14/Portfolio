import ButtonAppBar from "../nav";
// import game2 from "../images/game2.png";
import myResume from "./myResume.pdf";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Resume() {
  return (
    <div>
      <ButtonAppBar />
      <br />
      <center>
        <h3>To see my official resume, click on the link below</h3>
        <a href={myResume} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} >
          Resume
        </a>
      </center>
      <br />
      <center>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={1}
            sx={{ paddingLeft: 20, paddingRight: 20 }}
          >
            <Grid item xs={4}>
              <Item>
                Santa Ana Valley High School
                <br />
                Mathematics Teacher
                <br />
                October 2017- August 2022
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item sx={{ textAlign: "left" }}>
                <ul>
                  <li>
                    Exclusively used digital forms of communication and
                    collaboration for the online learning school year of
                    2020-2021, including online video streaming through Zoom;
                    Google services such as Google Drive, Docs, Sheets, and
                    Slides; and online classroom activities on Desmos{" "}
                  </li>
                  <li>
                    Tracked and analyzed data trends for purposeful synchronous
                    and asynchronous planning decisions for individuals and the
                    whole group
                  </li>
                  <li>
                    Informed planning based on past performance and future goals
                  </li>
                  <li>
                    Monthly meetings with full campus faculty to create action
                    plans and debrief on the progress of our shared goals and
                    vision
                  </li>
                  <li>
                    Regular meetings with math colleagues to collaborate in
                    creating lessons and assessments
                  </li>
                  <li>
                    Consistent dialogue with learners to help them understand
                    content, instructions, and points of confusion, and create a
                    positive learning space{" "}
                  </li>
                  <li>
                    Completed daily clerical tasks in a timely and professional
                    manner
                  </li>
                </ul>
              </Item>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={1}
            sx={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
          >
            <Grid item xs={4}>
              <Item>
                Per Scholas through ActivateWork Bootcamp on the MERN stack
                <br />
                October 2022- present
                <br />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item sx={{ textAlign: "left" }}>
                <ul>
                  <li>
                    Twenty-eight hours a week of online Javascript training
                    using MangoDB, Express.js, React, and NodeJS as well as HTML
                    and CSS
                  </li>
                  <li>
                    Daily collaboration with peers to problem solve and
                    troubleshoot
                  </li>
                  <li>
                    Weekly career development training for coaching on
                    communicating and presenting professionally, as well as how
                    to develop emotional intelligence for fostering a good work
                    environment and self-care
                  </li>
                </ul>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </center>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          sx={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
        >
          <Grid item xs={4}>
            <Item>Technical Skill Set</Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={{ textAlign: "left" }}>
              <ul>
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>NodeJS</li>
                <li>HTML</li>
                <li>Javascript</li>
                <li>Google Workspace</li>
                <li>Desmos Classroom</li>
              </ul>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          sx={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
        >
          <Grid item xs={4}>
            <Item>Professional Skill Set</Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={{ textAlign: "left" }}>
              <ul>
                <li>
                  Ability to make complex and abstract concepts accessible to
                  novice learners
                </li>
                <li>
                  Strong commitment to professional development and
                  self-reflection
                </li>
                <li>Facilitator of positive, collaborative environments </li>
                <li>Fluent in Spanish</li>
              </ul>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          sx={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
        >
          <Grid item xs={4}>
            <Item>Education</Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={{ textAlign: "left" }}>
              <ul>
                <li>
                  Master of Arts in Mathematics from California State
                  University, Fullerton
                </li>
                <li>
                  Single Subject Teaching Credential in Mathematics from
                  California State University, Fullerton
                </li>
                <li>
                  Bachelor of Arts in Mathematics from California State
                  University, Fullerton
                </li>
                <li>
                  Associate of Science in Mathematics from Fullerton Communitiy
                  College
                </li>
              </ul>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <br />
    </div>
  );
}

export default Resume;

{
  /* //=============================//
//=============================//
//=============================//
//=============================//
{/* <center>
// <h3>To see my official resume, click on the link below</h3>
// <a href={myResume} target="_blank" rel="noreferrer">
//   Resume
// </a>
// </center>

// <Paper
// sx={{
// p: 2,
// margin: "auto",
// maxWidth: 1300,
// flexGrow: 1,
// //   backgroundColor: (theme) =>
// //     theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// }}
// >
// <Grid
// container
// spacing={1}
// sx={{ paddingLeft: 1, paddingRight: 5, paddingTop: 5 }}
// >
// {/*spacing betweem column 1 and 2*/
}

// <Grid itemsx={{ width: 100, height: 400 }}>
// <br />
// Santa Ana Valley High School
// <br />
// Mathematics Teacher <br /> October 2017- August 2022
// </Grid>

// <Grid item xs={12} sm container>
// <Grid item xs container direction="column" spacing={3}>
// <Grid item xs>
// <ul>
//   <li>
//     Exclusively used digital forms of communication and
//     collaboration for the online learning school year of
//     2020-2021, including online video streaming through Zoom;
//     Google services such as Google Drive, Docs, Sheets, and
//     Slides; and online classroom activities on Desmos{" "}
//   </li>
//   <li>
//     Tracked and analyzed data trends for purposeful synchronous
//     and asynchronous planning decisions for individuals and the
//     whole group
//   </li>
//   <li>
//     Informed planning based on past performance and future goals
//   </li>
//   <li>
//     Monthly meetings with full campus faculty to create action
//     plans and debrief on the progress of our shared goals and
//     vision
//   </li>
//   <li>
//     Regular meetings with math colleagues to collaborate in
//     creating lessons and assessments
//   </li>
//   <li>
//     Consistent dialogue with learners to help them understand
//     content, instructions, and points of confusion, and create a
//     positive learning space{" "}
//   </li>
//   <li>
//     Completed daily clerical tasks in a timely and professional
//     manner
//   </li>
// </ul>
// </Grid>
// </Grid>
// </Grid>
// </Grid>

// <Grid
// container
// spacing={1}
// sx={{ paddingLeft: 1, paddingRight: 5, paddingTop: 5 }}
// >
// {/*spacing betweem column 1 and 2*/}

// <Grid itemsx={{ width: 100, height: 400 }}>
// <br />
// ActivateWork <br />
// Bootcamp on the MERN stack
// <br />
// October 2022- present
// </Grid>

// <Grid item xs={12} sm container>
// <Grid item xs container direction="column" spacing={2}>
// <Grid item xs>
// <ul>
//   <li>
//     Twenty-eight hours a week of online Javascript training
//     using MangoDB, Express.js, React, and NodeJS as well as HTML
//     and CSS
//   </li>
//   <li>
//     Daily collaboration with peers to problem solve and
//     troubleshoot
//   </li>
//   <li>
//     Weekly career development training for coaching on
//     communicating and presenting professionally, as well as how
//     to develop emotional intelligence for fostering a good work
//     environment and self-care
//   </li>
// </ul>
// </Grid>
// </Grid>
// </Grid>
// </Grid>

// <Grid
// container
// spacing={1}
// sx={{ paddingLeft: 1, paddingRight: 5, paddingTop: 5 }}
// >
// {/*spacing betweem column 1 and 2*/}

// <Grid itemsx={{ width: 100, height: 400 }}>
// <br />
// Professional Skill Set kjhjkhjk
// <br />
// </Grid>

// <Grid item xs={12} sm container>
// <Grid item xs container direction="column" spacing={2}>
// <Grid item xs>
// <ul>
//   <li>
//     Ability to make complex and abstract concepts accessible to
//     novice learners
//   </li>
//   <li>
//     Strong commitment to professional development and
//     self-reflection
//   </li>
//   <li>Facilitator of positive, collaborative environments </li>
//   <li>Fluent in Spanish</li>
// </ul>
// </Grid>
// </Grid>
// </Grid>
// </Grid>

// <Grid
// container
// spacing={1}
// sx={{ paddingLeft: 1, paddingRight: 5, paddingTop: 5 }}
// >
// {/*spacing betweem column 1 and 2*/}

// <Grid itemsx={{ width: 100, height: 400 }}>
// <br />
// Technical Skill Set adfv adfds
// <br />
// </Grid>

// <Grid item xs={12} sm container>
// <Grid item xs container direction="column" spacing={2}>
// <Grid item xs>
// <ul>
//   <li>MongoDB</li>
//   <li>Express</li>
//   <li>React</li>
//   <li>NodeJS</li>
//   <li>HTML</li>
//   <li>Javascript</li>
//   <li>Google Workspace</li>
//   <li>Desmos Classroom</li>
// </ul>
// </Grid>
// </Grid>
// </Grid>
// </Grid>

// <Grid
// container
// spacing={1}
// sx={{ paddingLeft: 1, paddingRight: 5, paddingTop: 5 }}
// >
// {/*spacing betweem column 1 and 2*/}

// <Grid itemsx={{ width: 100, height: 400 }}>
// <br />
// Education adfv asdlfskfsdfds
// <br />
// </Grid>

// <Grid item xs={12} sm container>
// <Grid item xs container direction="column" spacing={2}>
// <Grid item xs>
// <ul>
//   <li>
//     Master of Arts in Mathematics from California State
//     University, Fullerton
//   </li>
//   <li>
//     Single Subject Teaching Credential in Mathematics from
//     California State University, Fullerton
//   </li>
//   <li>
//     Bachelor of Arts in Mathematics from California State
//     University, Fullerton
//   </li>
//   <li>
//     Associate of Science in Mathematics from Fullerton
//     Communitiy College
//   </li>
// </ul>
// </Grid>
// </Grid>
// </Grid>
// </Grid>
// </Paper> */}
//=============================//
//=============================//
//=============================//
//=============================// */}

{
  /* <ButtonAppBar />
      <br/>
      <br/>
      <br/>
      <center>
      <Card sx={{ maxWidth: 460 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="460"
          src={game2}
          alt="game2 image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <a href="https://dvfon14.github.io/TwoTruthsAndALie/">Project 2</a>
          </Typography>
          <Typography variant="body1" color="ffffff">
            *Sumarize what the program does <br/>
            *Summarize the technologies used
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></center> */
}

//     import ButtonAppBar from "../nav";
// import game2 from "../images/game2.png";

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// function Resume() {
//   return (
//     <div>
//       <ButtonAppBar />
//       <br/>
//       <br/>
//       <br/>
//       <center>
//       <Card sx={{ maxWidth: 460 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           // height="460"
//           // src={game2}
//           // alt="game2 image"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//           <a >Project 2</a>
//           </Typography>
//           <Typography variant="body1" color="ffffff">
//             *Sumarize what the program does <br/>
//             *Summarize the technologies used
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card></center>

//     </div>
//   );
// }

//======================= grid layout with cards next to each other ======//
