import ButtonAppBar from "../nav";
import game2 from "../images/game2.png";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Projects() {
  return (
    <>
      <ButtonAppBar />
      <br />
      <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Two Truths and a Lie
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Description of Project
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 400 }}
        src={game2}
        alt="game2"
      />
    </Card>
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
