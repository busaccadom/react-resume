import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Card, CardContent, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function ContactMe() {
  return (
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box m={1.2} pt={.1}>
            <Typography variant="h5" component="div">
              Contact Information
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
                    <strong>Email: </strong> busaccadominic@gmail.com
                  </ListItem>

                  <ListItem>
                    <strong>Phone: </strong> 419.733.1121
                  </ListItem>
              </List>

              <br />
            
              <IconButton component="a" href="https://www.linkedin.com/in/dombusacca">
                <LinkedIn />
              </IconButton>

              <IconButton component="a" href="https://github.com/busaccadom">
                <GitHub />
              </IconButton>
            </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
