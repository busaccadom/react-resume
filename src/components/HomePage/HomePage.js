import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import profilePicture from './images/me.png';

export default function HomePage() {
   return (
         <Card sx={{ minWidth: 275 }}>
            <CardContent>
               <Box m={1.2} pt={.1}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     Dominic Busacca
                  </Typography>
                  <Typography variant="h5" component="div">
                     Senior Software Engineer II
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     Profile
                  </Typography>
                  <Typography variant="body2">
                     <i>
                        Skilled Senior Software Engineer with over nine years of in depth experience in software development and a track record of successful projects as a technical lead. Passionate in driving innovative and high quality software solutions. Looking for new and exciting opportunities in software devlepment.
                     </i>
                     <br />
                  </Typography>

                  <Box m={1.2} pt={.1}>
                  <img src={profilePicture} width="100" height="125"></img>
                  </Box>

               </Box>
            </CardContent>
         </Card>
   );
}
