import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';

export default function Languages() {
   return (
      <Card sx={{ minWidth: 275 }}>
         <CardContent>
            <Box m={1.2} pt={.1}>
               <Typography variant="h5" component="div">
                  Languages
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
                        C#
                     </ListItem>

                     <ListItem>
                        Java
                     </ListItem>

                     <ListItem>
                        Typescript
                     </ListItem>

                     <ListItem>
                        Javascript
                     </ListItem>

                     <ListItem>
                        VB Script
                     </ListItem>

                     <ListItem>
                        Python
                     </ListItem>

                     <ListItem>
                        JSON
                     </ListItem>                     
                     
                     <ListItem>
                        Yaml
                     </ListItem>                    
                     
                     <ListItem>
                        XML
                     </ListItem>
                     <ListItem>
                        Powershell Scripting
                     </ListItem>

                     <ListItem>
                        Bin/Bash Scripting
                     </ListItem>

                     <ListItem>
                        SQL
                     </ListItem>
                  </List>
                  <br />
               </Typography>
            </Box>
         </CardContent>
      </Card>
   )
};