import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem } from '@mui/material';

export default function Experience() {
   return(
      <>
         <Card sx={{ minWidth: 275 }}>
            <CardContent>
               <Box m={1.2} pt={.1}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     Rocket Mortgage
                  </Typography>
                  <Typography variant="h5" component="div">
                     Senior Software Engineer II
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     December 2020 - Current
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
                           Lead a product engineering team of 5-7 peers to coordinate updates to our servicing default client platform.
                        </ListItem>

                        <ListItem>
                           Provided team efficiency improvements that resulted in significant decreases in delivery metrics for user stories.
                        </ListItem>

                        <ListItem>
                           Collaborate with enterprise architecture group to provide feedback on upcoming organization level standards, tooling, and outage protocols to ensure better overall quality of applications.
                        </ListItem>

                        <ListItem>
                           Provide feedback and mentoring to engineers across the organization on systems supported, team standards, practices, and architecture.
                        </ListItem>

                        <ListItem>
                           Interview candidates for any software development roles from Associate to Senior Software Engineer to ensure our organization has the best talent.
                        </ListItem>

                        <ListItem>
                           Continued  development on team applications to assist with meeting deadlines and providing tools which  increased productivity and improved automated testing strategy.
                        </ListItem>
                     </List>
                     <br />
                  </Typography>
               </Box>
            </CardContent>
         </Card>

         <br/>

         <Card sx={{ minWidth: 275 }}>
            <CardContent>
               <Box m={1.2} pt={.1}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     Rocket Mortgage
                  </Typography>
                  <Typography variant="h5" component="div">
                     Software Engineer
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     March 2018 - December 2020
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
                           Worked on business features based on a prioritized backlog of items which included building onto our existing infrastructure and building out brand new systems for the servicing default suite.
                        </ListItem>

                        <ListItem>
                           Created and updated .NET Core/Framework APIs, an Angular Js front end,  Angular 2 front ends, .NET Core AWS Lambdas, .NET Core AWS Lambda APIs, SQL databases, RDS databases, and other AWS products.
                        </ListItem>

                        <ListItem>
                           Implemented CI/CD pipelines for OnPrem and AWS Cloud Applications/infrastructure that included building projects, unit/automated testing,  and deployment using Terraform, Docker, ADS (formerly TFS), builds/releases, and Circle Ci.
                        </ListItem>

                        <ListItem>
                           Utilized and managed GIT and TFS source control repositories.
                        </ListItem>

                        <ListItem>
                           Wrote automated tests for changes and existing functionality that included front/back end unit tests(XUnit, MS Test, Jasmine),  automated API tests(Python, MS Test framework, Postman Newman), and UI automation tests(Selenium C#).
                        </ListItem>
                     </List>
                     <br />
                  </Typography>
               </Box>
            </CardContent>
         </Card>

         <br/>

         <Card sx={{ minWidth: 275 }}>
            <CardContent>
               <Box m={1.2} pt={.1}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     Rocket Mortgage
                  </Typography>
                  <Typography variant="h5" component="div">
                     Quality Engineer
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     September 2014 - March 2018
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
                           Wrote automated API and front end automation tests using Selenium C#, Quick Test Professional, Ready API, Soap UI,  Postman Newman, and the MS Test framework.
                        </ListItem>

                        <ListItem>
                           Built automation pipelines for API integration and workflow tests using Jenkins. 
                        </ListItem>

                        <ListItem>
                           Architect and implemented an API service and an Angular 2 front end to store and display results of any type of automated test result.
                        </ListItem>

                        <ListItem>
                           Participated and organized meetings for the servicing wide quality engineering team to discuss and implement automated testing standards and best practices.
                        </ListItem>

                        <ListItem>
                           Worked with Business Analysts and Software Engineers to build out automation tests in parallel with new system implementations or modifications.
                        </ListItem>
                     </List>
                     <br />
                  </Typography>
               </Box>
            </CardContent>
         </Card>
      </>
   );
}