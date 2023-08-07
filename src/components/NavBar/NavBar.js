import React from 'react';
import { NavBarWrapper } from './NavBar.styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

function NavBar() {

   const navigate = useNavigate();
   
   const homeKey = 'Home';
   const homeRoute = () => navigate('/');

   const languagesKey = 'Languages';
   const languagesRoute = () => navigate('/Languages');

   const experienceKey = 'Experience';
   const experienceRoute = () => navigate('/Experience');

   return (
      <NavBarWrapper data-testid="NavBar">
         <AppBar position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
               <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: { xs: 'none', md: 'flex' },
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.3rem',
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  DOM
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button
                     key={homeKey}
                     onClick={homeRoute}
                     sx={{ my: 2, color: 'white', display: 'block' }}
                     >
                     {homeKey}
                  </Button>


                  <Button
                     key={languagesKey}
                     onClick={languagesRoute}
                     sx={{ my: 2, color: 'white', display: 'block' }}
                     >
                     {languagesKey}
                  </Button>

                  <Button
                     key={experienceKey}
                     onClick={experienceRoute}
                     sx={{ my: 2, color: 'white', display: 'block' }}
                     >
                     {experienceKey}
                  </Button>
               </Box>
               </Toolbar>
            </Container>
         </AppBar>
      </NavBarWrapper>
   );
}

export default NavBar;
