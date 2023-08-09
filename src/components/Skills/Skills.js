import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';

export default function Skills() {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
       <Box m={1.2} pt={.1}>
          <Typography variant="h5" component="div">
             Skills
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
                  Technical Leadership
                </ListItem>

                <ListItem>
                  Architecture
                </ListItem>

                <ListItem>
                  Front-End Development(Angular, AngularJs, ReactJs)
                </ListItem>

                <ListItem>
                  Back-End Development(.NET)
                </ListItem>

                <ListItem>
                  Database Development(AWS RDS(Mysql), Sql, MongoDB, DynamoDB)
                </ListItem>

                <ListItem>
                  AWS Services(Lambda, S3 with cloudfront, SNS, SQS, Cloudwatch, ECS Clusters, Kubernetes Clusters, EC2)
                </ListItem>                     
                
                <ListItem>
                  IaC(Terraform/Terragrunt)
                </ListItem>                    
                
                <ListItem>
                  CI/CD Pipelines(CircleCi, Jenkins, TFS Pipelines)
                </ListItem>

                <ListItem>
                  Unit Testing(xunit, MSTest, jasmine)
                </ListItem>

                <ListItem>
                  UI Automated Testing(Selenium, Quick Test Professional)
                </ListItem>

                <ListItem>
                  API Automated Testing(xunit, postman newman, SoapUI)
                </ListItem>

                <ListItem>
                  UI Mocking(Montebank, WireMock)
                </ListItem>
             </List>
             <br />
          </Typography>
       </Box>
    </CardContent>
 </Card>
  );
};