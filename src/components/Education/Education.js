import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem } from '@mui/material';
import bg from './images/bg.png';

export default function Education() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box m={1.2} pt={.1}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Bachloer of Science, Computer Science
            </Typography>
            <Typography variant="h5" component="div">
              Bowling Green State University
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Class of 2014
            </Typography>
            <Typography variant="body2">
              <List
              sx = {{
                  listStyleType: 'disc',
                  pl: 2,
                  '& .MuiListItem-root': {
                  display: 'list-item',
                  },
              }}>
                  <ListItem>
                    Learned basic programming concepts and syntax using C++, Java, and machine language.
                  </ListItem>

                  <ListItem>
                    Studied basic software development life cycles such as Waterfall and Agile.
                  </ListItem>

                  <ListItem>
                    Created a capstone project with a team of peers while practicing Agile development practices.
                  </ListItem>
              </List>
              <br />
            </Typography>
        </Box>

        <br />

        <Box>
          <img src={bg} width="370.37" height="278"></img>
        </Box>
      </CardContent>
    </Card>
  );
};
